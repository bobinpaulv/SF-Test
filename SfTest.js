<script>
(function () {
    "use strict";

    alert("Career site custom JS loaded successfully.");
    console.log("Career site custom JS loaded successfully.");

    // Example: Display a welcome message
    function showWelcomeMessage() {
        console.log("Welcome to the Career Site!");
    }

    // Example: Track button clicks
    document.addEventListener("click", function (e) {
        var btn = e.target.closest("button");
        if (!btn) {
           
            return;
        }
        alert("Button clicked:" + btn.innerText);
        console.log("Button clicked:", btn.innerText);
    });

    // Initialize
    showWelcomeMessage();
})();
</script>