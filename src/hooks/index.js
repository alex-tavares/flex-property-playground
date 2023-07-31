import { useEffect, useState, useCallback, startTransition } from "react";
import { debounce } from "../utils";

export function useDimensions(containerRef) {
  const [dimensions, setDimensions] = useState({});

  const updateDimensions = useCallback(() => {
    const clonedContainer = containerRef.current.cloneNode(true);

    clonedContainer.style.visibility = "hidden";

    for (let element of clonedContainer.children) {
      element.style.flexGrow = "unset";
      element.style.flexShrink = "0";
    }

    document.body.appendChild(clonedContainer);

    const containerDimensions = {
      currentWidth: containerRef.current.clientWidth
    };

    const elementsDimensions = Array.from(containerRef.current.children).reduce(
      (acc, element, index) => {
        const { flexBasis, flexGrow, flexShrink } = getComputedStyle(element);

        if (flexBasis !== "0px") {
          acc.initialTotalWidth =
            acc.initialTotalWidth + clonedContainer.children[index].clientWidth;
        }

        acc.currentTotalWidth = acc.currentTotalWidth + element.clientWidth;

        const initialWidth =
          flexBasis === "0px" ? 0 : clonedContainer.children[index].clientWidth;

        const currentWidth = element.clientWidth;

        const elementDimensions = {
          grow: flexGrow,
          shrink: flexShrink,
          basis: flexBasis,
          initialWidth,
          currentWidth,
          difference: currentWidth - initialWidth
        };

        acc.dimensions.push(elementDimensions);

        return acc;
      },
      {
        currentTotalWidth: 0,
        initialTotalWidth: 0,
        dimensions: []
      }
    );

    elementsDimensions.difference =
      elementsDimensions.currentTotalWidth -
      elementsDimensions.initialTotalWidth;

    clonedContainer.remove();

    startTransition(() => {
      setDimensions({
        container: containerDimensions,
        elements: elementsDimensions
      });
    });
  }, [containerRef]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      debounce(() => {
        updateDimensions();
      })
    );

    if (containerRef.current) {
      updateDimensions();
      resizeObserver.observe(containerRef.current);
    }
  }, [containerRef, updateDimensions]);

  return [dimensions, updateDimensions];
}
