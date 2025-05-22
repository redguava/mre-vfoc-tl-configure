import "@testing-library/jest-dom/vitest";
import failOnConsole from "vitest-fail-on-console";

// This unused import is enough to cause the test not to fail, although it should
import * as noop from "@testing-library/react";

failOnConsole();
