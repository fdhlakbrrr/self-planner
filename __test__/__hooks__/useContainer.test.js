import { renderHook } from "@testing-library/react";
import { useContainer } from "../../src/hooks/ui/useContainer";

test("should be justify start", () => {
  const { result } = renderHook(() => useContainer());

  const { getContainerClassName } = result.current;

  expect(getContainerClassName("COL", "START", "START")).toBe(
    "flex gap-5 p-5 box-border flex-col justify-start items-start "
  );
});

test("should be justify-center", () => {
  const { result } = renderHook(() => useContainer());

  const { getContainerClassName } = result.current;

  expect(getContainerClassName("COL", "CENTER", "CENTER")).toBe(
    "flex gap-5 p-5 box-border flex-col justify-center items-center "
  );
});

test("should be justify-end", () => {
  const { result } = renderHook(() => useContainer());

  const { getContainerClassName } = result.current;

  expect(getContainerClassName("COL", "END", "END")).toBe(
    "flex gap-5 p-5 box-border flex-col justify-end items-end "
  );
});

test("should be justify-betweeen", () => {
  const { result } = renderHook(() => useContainer());

  const { getContainerClassName } = result.current;

  expect(getContainerClassName("COL", "BETWEEN", "BETWEEN")).toBe(
    "flex gap-5 p-5 box-border flex-col justify-between items-between "
  );
});
