// Function to toggle the display of the service details (pricing)
function toggleDetails(serviceId) {
    const details = document.getElementById(serviceId);

    // Toggle the display of the service details (show/hide)
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
