<script lang="ts">

</script>

<section>
    <span>Moi c'est</span>
    <h1>Morgan <span>NEHDI</span></h1>
    <p>Développeur autodidacte, je suis, depuis mon plus jeune âge passionné par l'informatique et les nouvelles technologies.</p>

    <div class="composition-background">
        <ul>
            <li>
                <a href="https://linkedin.com/in/morgan-nehdi/" target="_blank">
                    <img src="/assets/social_linkedin.png" alt="linkedin"/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/yannaro35" target="_blank">
                    <img src="/assets/social_twitter.png" alt="twitter"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/PixelDream" target="_blank">
                    <img src="/assets/social_github.png" alt="github"/>
                </a>
            </li>
        </ul>

        <img src="/assets/home_brand.png" alt="Morgan NEHDI"/>
    </div>
</section>

<style lang="scss">

    section {
        margin-top: 80px;
        width: 70%;

        span {
            font-weight: 300;
            font-size: 25px;
            line-height: 30px;
        }

        h1 {
            font-family: 'Jura';
            font-style: normal;
            font-weight: 700;
            font-size: 55px;
            line-height: 65px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            margin: 0 0 30px -5px;

            span {
                display: none;
            }
        }

        p {
            font-weight: 500;
            font-size: 15px;
            line-height: 150%;
            text-align: justify;
            letter-spacing: 0.05em;
            max-width: 450px;
        }

        .composition-background {
            position: absolute;
            bottom: 0;
            right: calc(30% - 80px);


            ul {
                position: absolute;
                display: flex;
                justify-content: space-between;
                list-style: none;
                width: 300px;

                li {
                    position: relative;
                    height: 50px;
                    width: 50px;

                    img {
                        transform: translate(-5px, -4px);
                    }

                    &:hover {
                        border-radius: 200px;
                        box-shadow: 1px 1px 2px 0px $blue-gray;
                    }

                    &:nth-child(1) {
                        transform: translate(5px, 65px);
                    }

                    &:nth-child(2) {
                        transform: translateX(100px);
                    }

                    &:nth-child(3) {
                        transform: translate(50px, 150px);
                    }
                }
            }
        }
    }
</style>