export function simpleStringFunction(s: string): boolean {
    if (s.startsWith("Start")) {
        if (s.endsWith("End")) {
            return true;
        }
        else return false;
    }
}
