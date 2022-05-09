<script lang="ts">
    // Fetch the data from projects.json
    let promise = fetchProjects();
    async function fetchProjects() {
		const res = await fetch("data/project.json");

		if (res.ok) {
			return res.json();
		} else {
			throw new Error("Failed to fetch projects");
		}
	}
</script>

<section>
    <h1>Mes projets</h1>

    <div>
        {#await promise}
            <p>Chargement...</p>
        {:then projects}
            {#each projects as project}
                <div class="card">
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <ul>
                            {#each project.tech as techno}
                                <li>{techno}</li>
                            {/each}
                        </ul>

                        <div class="docs">
                            {#each project.doc as doc}
                                <div>
                                    {#if doc.ext}
                                        <a href={doc.url} target="_blank">{doc.title}</a>
                                    {:else}
                                    <a href={'assets/img/portfolio/' + doc.url} target="_blank">{doc.title}</a>
                                    {/if}
                                </div>
                            {/each}
                        </div>

                    </div>
                </div>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>

</section>


<style lang="scss">    
    section {
        padding: 0 40px 50px 40px;

        .card {
            margin: 10px 0;
            background-color: rgba($color: $light-gray, $alpha: .4);
            border-radius: 5px;
            padding: 5px 25px;

            .docs {
                margin-top: 10px;

                div {
                    margin-bottom: 5px;
                }
            }
        }

        h1 {
            margin: 90px 0 30px 0;    
            font-weight: 700;
            font-size: 30px;
            line-height: 150%;
            text-align: center;
            letter-spacing: 0.06em;
        }

        // ul {
        //     display: flex;
        //     justify-content: space-between;
        //     list-style: none;
        //     padding: 0;
        //     color: $white;

        //     li {
        //         padding: 0;
        //         padding: 3px 18px;
        //         background-color: $blue-gray;
        //         border-radius: 5px;
        //         cursor: pointer;

        //         &.active {
        //             background-color: $blue;
        //         }
        //     }
        // }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            color: $white;
            flex-flow: wrap;
            font-size: 11px;
            font-weight: 400;

            li {
                margin: 2px 2px;
                padding: 5px 5px;
                background-color: $blue;
                border-radius: 5px;
                
            }
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            gap: 10px;
            justify-items: center;
            margin-top: 40px;

            img {
                height: 100%;
                width: 100%;
                border-radius: 5px;
            }
        }
    }
</style>