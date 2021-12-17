<script type="module" class="getYear">
    // Get Year Function for Copyright in Footer
    window.addEventListener(`DOMContentLoaded`, event => {
        const date = new Date();
        const year = date.getFullYear();
        const yearElement = $(`.year`);
        yearElement.html(year);
    })
</script>

<footer class="footer red">
    <div class="innerFooter">
        <div class="nameText">
            <a class="customLink" href="https://github.com/strawhat19/" target="_blank" title="GitHub Repo">
                <i class="fab fa-github"></i> | MyDex
            </a>
        </div>
        <div class="siteText copyright">Copyright <i class="fas fa-copyright"></i> <span class="year"></span></div>
    </div>
</footer>