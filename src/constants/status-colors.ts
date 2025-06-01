export const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
    FINALIZED: { bg: "#E8F5E9", text: "#2E7D32" },
    REVIEW: { bg: "#FFF3E0", text: "#E65100" },
    REJECTED: { bg: "#FFEBEE", text: "#C62828" },
    DRAFT: { bg: "#E3F2FD", text: "#1565C0" },
    PENDING: { bg: "#F3E5F5", text: "#7B1FA2" },
    IN_PROGRESS: { bg: "#E0F7FA", text: "#00838F" },
    COMPLETED: { bg: "#F1F8E9", text: "#558B2F" },
    CANCELLED: { bg: "#ECEFF1", text: "#455A64" },
} as const;

export type StatusType = keyof typeof STATUS_COLORS; 