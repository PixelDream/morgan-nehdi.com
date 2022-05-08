<!-- Navbar Component (Accueil, Projets, Blogs, A propos) -->

<script lang="ts">
    import { Link } from "svelte-navigator";

    const today: number = new Date().getFullYear();
</script>

<footer>
    <p>&copy;{today}</p>
    <span>
        <Link to="/legals">Mentions Légales</Link>
    </span>
</footer>

<style lang="scss">
    footer {
        font-size: .8em;
        position: fixed;
        bottom: 0;
        width: -webkit-fill-available;

        p {
            position: absolute;
            bottom: 5px;
            left: 20px;
        }

        span {
            position: absolute;
            bottom: 23px;
            right: 20px;
            writing-mode: tb-rl;
            transform: rotate(-180deg);

            line-height: 150%;
            text-align: justify;
            letter-spacing: 0.115em;
            text-decoration-line: underline;
            white-space: nowrap;
        }
    }
</style>