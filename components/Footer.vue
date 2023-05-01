<template>
    <div class="bg-light-100 flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center py-10 px-5 gap-16">
            <nuxt-img class="w-[35px]" src="/logo.webp" provider="cloudinary"
                alt="Logo diagnostimmopro"/>
            <div v-for="link in links" class="flex flex-col justify-center items-center gap-3">
                <h3 class="text-xl font-bold">{{ link.h3 }}</h3>
                <ul v-for="aItem in link.a">
                    <li>
                        <NuxtLink :to="aItem.path">{{ aItem.text }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col justify-center items-center gap-3">
                <ul v-for="social in socials">
                    <li>
                        <NuxtLink :to="social.src" class="flex items-center gap-2">
                            <nuxt-img :src="social.path" :alt="social.alt" class="w-8" provider="cloudinary"/>
                            {{ social.text }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center p-2.5 gap-2.5 bg-primary">
        <p class="font-medium">© 2023 diagnostimmopro.com</p>
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
                        path: "/diagnostics/mandatory"
                    },
                    {
                        text: "L’audit énergétique",
                        path: "/diagnostics/mandatory"
                    },
                    {
                        text: "Comment ça marche ?",
                        path: "/diagnostics/mandatory"
                    },
                    {
                        text: "Avis clients",
                        path: "/diagnostics/mandatory"
                    },
                    {
                        text: "Nous contacter par e-mail",
                        path: "/diagnostics/mandatory"
                    },
                    {
                        text: "Vous faire rappeler",
                        path: "/diagnostics/mandatory"
                    },
                    {
                        text: "Appelez-nous",
                        path: "tel:+33660393750"
                    },
                    {
                        text: "Obtenir mon devis",
                        path: "/diagnostics/mandatory"
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
                    }
                ]
            }
        ],
        socials: [
            {
                path: "/social/facebook.webp",
                text: "@dignostimmopro",
                src: "https://facebook.com",
                alt: 'logo facebook'
            },
            {
                path: "/social/instagram.webp",
                text: "@dignostimmopro",
                src: "https://instagram.com",
                alt: 'logo instagram'
            },
            {
                path: "/social/whatsapp.webp",
                text: "+33(0)677554433",
                src: "https://whatsapp.com",
                alt: 'logo whatsapp'
            }
        ]
    })
}

</script>