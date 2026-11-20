export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("[IdealResort]", context["boundary"] ?? "unknown", error);
}