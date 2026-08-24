export function truncate(text: string, maxLength: number): string{
    if (text.length <= maxLength) {
        return text;
    }

    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > 0) {
        return truncated.slice(0, lastSpace) + '...';
    }
    return truncated + '...';
}