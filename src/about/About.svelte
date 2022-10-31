<script lang="ts">
    let idx: number = 0;
</script>

<section>
    <div class="profile">
        <img src="assets/morgan-nehdi.jpg" alt="Morgan NEHDI">
        <div>
            <h1>Morgan <span>NEHDI</span></h1>
            <p>Etudiant à l'ISTIC, en recherche de stage</p>
        </div>
    </div>

    <div class="action">
        <a href="https://calendly.com/morgan-nehdi/30min" target="_blank">Prendre rendez-vous</a>
        <a href="mailto:contact@morgan-nehdi.com" target="_blank">Contacter</a>
    </div>

    <ul class="nav">
        <li class={idx == 0 ? 'active' : ''} on:click={() => idx = 0}>Parcours</li>
        <li class={idx == 1 ? 'active' : ''} on:click={() => idx = 1}>Technos</li>
        <li class={idx == 2 ? 'active' : ''} on:click={() => idx = 2}>Réseaux</li>
    </ul>

    {#if idx == 0}
        <div class="guideline">
            <div>
                <h3>ISTIC - Université Rennes 1</h3>
                <span>Rennes - <time>2022 / 2025</time></span>
                <p>Licence 3 / Master MIAGE</p>
            </div>
            <div>
                <h3>IUT Laval - Université du Mans</h3>
                <span>Laval - <time>2020 / 2022</time></span>
                <p>DUT en informatique</p>
            </div>
            <div>
                <h3>Lycée de La Salle</h3>
                <span>Rennes - <time>2018 / 2020</time></span>
                <p>Baccalauréat - STMG option SIG (17.8 / 20)</p>
            </div>
            <div>
                <h3>I.E.S Alonso Cano</h3>
                <span>Espagne - <time>2017 / 2018</time></span>
            </div>
            <div>
                <h3>I.E.S Las Galletas</h3>
                <span>Espagne - <time>2015 / 2017</time></span>
            </div>
            <div>
                <h3>Collège Emile Zola</h3>
                <span>Rennes - <time>2012  2015</time></span>
            </div>
        </div>
    {/if}

    {#if idx == 1}
        <div class="technos">
            <div>
                <h3>Mobile</h3>
                <ul>
                    <li>Android SDK</li>
                    <li>Swift UI</li>
                    <li>Flutter</li>
                </ul>
            </div>
            <div>
                <h3>Bases de données</h3>
                <ul>
                    <li>Mysql</li>
                    <li>PosgreSQL</li>
                    <li>MSSQL</li>
                    <li>Neo4J</li>
                    <li>Redis</li>
                </ul>
            </div>
            <div>
                <h3>Communications</h3>
                <ul>
                    <li>Socket.IO</li>
                    <li>API REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <div>
                <h3>Applicatif</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>
                        PHP
                        <ul>
                            <li>Symfony</li>
                            <li>Laravel</li>
                        </ul>
                    </li>
                    <li>C / C++</li>
                    <li>
                        Java
                        <ul>
                            <li>Hibernate</li>
                            <li>Primefaces</li>
                            <li>Liquibase</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Logiciels</h3>
                <ul>
                    <li>Suite Jetbrain</li>
                    <li>VSCode</li>
                    <li>Docker</li>
                    <li>Figma</li>
                    <li>Git - GitHub - GitLab</li>
                    <li>Jira</li>
                    <li>Confluence</li>
                    <li>Datadog</li>
                </ul>
            </div>
        </div>
    {/if}

    {#if idx == 2}
        <div class="reseaux">
            <ul>
                <li>
                    <a href="https://github.com/PixelDream" target="_blank">
                        <img src="assets/social_github.png" alt="GitHub">
                        <h3>GitHub</h3>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/morgan-nehdi/" target="_blank">
                        <img src="assets/social_linkedin.png" alt="LinkedIn">
                        <h3>LinkedIn</h3>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/yannaro35" target="_blank">
                        <img src="assets/social_twitter.png" alt="Twitter">
                        <h3>Twitter</h3>
                    </a>
                </li>
            </ul>
        </div>
    {/if}
</section>

<style lang="scss">
    section {
        padding: 0 40px 50px 40px;
        margin-top: 100px;

        .nav {
            margin: 30px 0;
            display: flex;
            justify-content: space-between;
            list-style: none;
            padding: 5px 5px;
            border-radius: 5px;

            background-color: $light-gray;

            li {
                color: $black;
                padding: 3px 14px;
                border-radius: 5px;
                cursor: pointer;

                &.active {
                    background-color: $white;
                }
            }
        }

        .reseaux {
            margin: 0 10px;
            ul {
                list-style: none;
                padding-inline-start: 10px;
                margin: 0;

                li {
                    margin: 10px 0;
                    a {
                        display: flex;

                        img {
                            width: 30px;
                            height: 30px;
                            margin-right: 10px;
                        }

                        h3 {
                            font-size: 1.2rem;
                            font-weight: bold;
                            margin: 0;
                        }
                    }
                }
            }
        }

        .technos {
            padding-bottom: 30px;
            margin: 0 10px;

            div {
                margin: 30px 0;
                h3 {
                    font-size: 1.2em;
                    font-weight: bold;
                    margin: 2px 0;
                }

                ul {
                    list-style: none;
                    padding-inline-start: 10px;
                    margin: 0;
                }
            }
        }

        .profile {
            display: flex;
            align-items: stretch;


            img {
                width: 120px;
                height: 120px;
                border-radius: 5px;
                margin-bottom: 20px;
            }

            div {
                display: flex;
                flex-direction: column;
                padding-left: 30px;
                justify-content: space-between;

                h1 {
                    font-size: 30px;
                    font-weight: 700;
                    margin: 0;
                    width: 50%;

                    span {
                        display: block;
                    }
                }

                p {
                    font-size: 14px;
                    font-weight: 400;
                    margin-bottom: 20px;
                    text-align: justify;
                    max-width: 300px;
                }

            }
        }

        .action {
            display: grid;
            grid-template-columns: 2fr 1fr;
            justify-items: center;
            margin-top: 10px;
            gap: 15px;

            a {
                padding: 7px 14px;
                border: none;
                border-radius: 5px;
                font-size: 14px;
                font-weight: 700;
                color: $white;
                background-color: $gray;
                text-align: center;
                width: -webkit-fill-available;

                &:hover {
                    cursor: pointer;
                    text-decoration: none;
                }

            }

            a:first-child {
                background-color: $blue;
            }
        }

        .guideline {
            display: grid;
            gap: 25px;
            margin: 0 10px;

            border-left: 2px solid $dark-gray;
            padding: 20px 0 20px 15px;
            border-radius: 5px;

            div {
                display: flex;
                flex-direction: column;
                position: relative;

                &::before {
                    content: "";
                    width: 8px;
                    height: 8px;
                    background-color: $dark-gray;

                    border-bottom-right-radius: 50px;
                    border-top-right-radius: 50px;

                    position: absolute;
                    top: 8px;
                    left: -15px
                }

                h3 {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0;

                }

                span {
                    font-size: 13px;

                    time {
                        padding-top: 5px;
                        font-weight: 400;
                        margin: 0;
                    }
                }

                

            }
        }
    }

    
</style>