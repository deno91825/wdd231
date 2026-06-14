export async function getGraduates() {
    try {
        const response = await fetch("data/graduates.json");

        if (!response.ok) {
            throw new Error("Failed to load graduate data");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching graduates:", error);
        return [];
    }
}