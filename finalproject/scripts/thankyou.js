const params = new URLSearchParams(window.location.search);

const output = document.querySelector("#output");

if (output) {
    output.innerHTML = `
        <h2>Submission Details</h2>

        <p><strong>Name:</strong> ${params.get("name")}</p>
        <p><strong>School:</strong> ${params.get("school")}</p>
        <p><strong>Level:</strong> ${params.get("level")}</p>
        <p><strong>Career:</strong> ${params.get("career")}</p>
        <p><strong>Quote:</strong> ${params.get("quote")}</p>
    `;
}