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
<!-- jQuery Core -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="module" src="./assets/scripts/fetch.js"></script>
<script type="module" src="./assets/scripts/index.js"></script>
<script type="module" src="./assets/scripts/render.js"></script>
<script type="module" src="./assets/scripts/search.js"></script>
<script>
    window.addEventListener(`DOMContentLoaded`, event => {
        const date = new Date();
        const year = date.getFullYear();
        const yearElement = $(`.year`);
        yearElement.html(year);
    })
</script>