<template>
    <div class="contain">
        <div class="section">
            <div class="content">
                <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-5 justify-center items-center lg:items-start">
                    <div class="lg:order-2 flex flex-col justify-center items-center lg:items-start gap-3 w-full">
                        <nuxt-img class="w-[35px]" src="/logo.webp" provider="cloudinary" alt="Logo diagnostimmopro" />
                        <ul v-for="social in socials">
                            <li>
                                <NuxtLink :to="social.src" class="text-base flex items-center gap-2">
                                    <nuxt-img :src="social.path" :alt="social.alt" class="w-6" provider="cloudinary" />
                                    {{ social.text }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div v-for="link in links" class="w-full flex flex-col justify-center items-center lg:items-start gap-3">
                        <div>
                            <h3 class="text-lg font-bold w-full text-center">{{ link.h3 }}</h3>
                        </div>
                        <ul v-for="aItem in link.a">
                            <li>
                                <NuxtLink :to="aItem.path" class="text-base">{{ aItem.text }}</NuxtLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center p-2.5 gap-2.5 bg-primary">
        <p class="font-medium">© 2023 | diagnostimmopro.com</p>
    </div>
</template>
<script lang="ts">
export default {
    data: () => ({
        links: [
            {
                h3: "Plan du site",
                a: [
                    {
                        text: "Accueil",
                        path: "/"
                    },
                    {
                        text: "Les diagnostics obligatoires",
                        path: "/diagnostics/mandatory"
                    },
                    {
                        text: "Nos diagnostiqueurs",
                        path: "/diagnostics/ourDiagnostician"
                    },
                    {
                        text: "L’audit énergétique",
                        path: "/diagnostics/energeticAudience"
                    },
                    {
                        text: "Comment ça marche ?",
                        path: "/howItWorks"
                    },
                    {
                        text: "Avis clients",
                        path: "/reviews"
                    },
                    {
                        text: "Obtenir mon devis",
                        path: "/quotation"
                    }
                ]
            },
            {
                h3: "Mentions",
                a: [
                    {
                        text: "Mentions Légales",
                        path: "/mentions/legal"
                    },
                    {
                        text: "Conditions d’utilisation",
                        path: "/mentions/cgu"
                    },
                    {
                        text: "Protection des données",
                        path: "/mentions/privacy"
                    }
                ]
            },
            {
                h3: "Communication",
                a: [
                    {
                        text: "Nous contacter par e-mail",
                        path: "/contact/contactUs"
                    },
                    {
                        text: "Vous faire rappeler",
                        path: "/contact/callUBack"
                    },
                    {
                        text: "Appelez-nous",
                        path: "tel:+33660393750"
                    },
                ]
            }
        ],
        socials: [
            {
                path: "/social/facebook.webp",
                text: "@diagnostimmopro",
                src: "https://www.facebook.com/DiagnostimmoPro",
                alt: 'logo facebook'
            },
            {
                path: "/social/instagram.webp",
                text: "@diagnostimmopro",
                src: "https://www.instagram.com/diagnostimmopro/",
                alt: 'logo instagram'
            },
            {
                path: "/social/whatsapp.webp",
                text: "+33(0)66039375",
                src: "https://wa.me/33660393750",
                alt: 'logo whatsapp'
            }
        ]
    })
}

</script>