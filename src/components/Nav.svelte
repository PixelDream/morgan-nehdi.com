<!-- Navbar Component (Accueil, Projets, Blogs, A propos) -->

<script lang="ts">
    import { onDestroy } from "svelte";

    import { Link, globalHistory } from "svelte-navigator";

    let path: String = globalHistory.location.pathname;

    const unsubscribe = globalHistory.listen(({ location }) => {
        path = location.pathname;
    });

    const navBar: { name: string, link: string, id: number }[] = [
        {
            id: 0,
            name: "Accueil",
            link: "/"
        },
        {
            id: 1,
            name: "Projets",
            link: "/projets"
        },
        // {
        //     id: 2,
        //     name: "Blogs",
        //     link: "/blogs"
        // },
        {
            id: 3,
            name: "A propos",
            link: "/a-propos"
        }
    ];

    onDestroy(unsubscribe);
</script>

<nav>
    <ul>
        {#each navBar as tab}
            <li>
                <Link to="{tab.link}" class="{path == tab.link ? 'active' : ''}">{tab.name}</Link>
            </li>
        {/each}

    </ul>
</nav>

<style lang="scss">
    nav {
        max-width: 400px;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                position: relative;
                text-align: center;

                :global(a) {
                    color: $black;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 15px;
                    line-height: 150%;
                    letter-spacing: 0.05em;

                    &:hover {
                        color: $blue;
                        text-decoration: none;
                    }
                }

                :global(a.active)::after {
                    position: absolute;
                    content: "";
                    width: 40%;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: $blue;
                    animation: appear 0.2s linear;
                    transform: translateX(60%);
                }
            }
        }
    }

    @keyframes appear {
        from {
            width: 0;
        }
        to {
            width: 40%;
        }
    }
</style>