<template>
  <SectionHeader>
    <template v-slot:header>
      Tout savoir sur <span class="text-lemon">l'audit énergétique</span>
    </template>
    <template v-slot:subtitle>
      Découvrez ce qu'il faut savoir sur l'audit énergétique
    </template>
    <template v-slot:firstButton>
      <ButtonBlockLemon to="/quotation">Obtenir mon devis</ButtonBlockLemon>
    </template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>
      <ButtonBlockSecondary to="tel:0660393750">Appelez-nous</ButtonBlockSecondary>
    </template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img class="hero-image" src="/thinking_man.webp" alt="Voiture qui voyage" provider="cloudinary" />
    </template>
  </SectionHeader>
  <div class="bg-light-300 text-dark-600">
    <div class="contain">
      <div class="section">
        <div class="content">
          <h2> Qu'est-ce qu'un audit énergétique ?</h2>
          <p>Un audit énergétique est une évaluation complète de la consommation d'énergie d'un bâtiment. Il s'agit d'un
            processus rigoureux qui implique une analyse approfondie de l'ensemble du système énergétique du bâtiment, y
            compris les équipements, les systèmes de chauffage, de ventilation et de climatisation, l'éclairage,
            l'isolation, les fenêtres et les portes. L'objectif de l'audit énergétique est d'identifier les points faibles
            et les améliorations possibles pour réduire la consommation d'énergie et les émissions de gaz à effet de serre.
          </p>
          <h3>Pourquoi est-il important de réaliser un audit énergétique ?</h3>
          <p>L'audit énergétique est un processus important pour plusieurs raisons. Tout d'abord, il permet de réduire les
            coûts d'exploitation en identifiant les gaspillages énergétiques et les moyens de les éliminer. Ensuite, il peut
            contribuer à améliorer le confort des occupants en optimisant les systèmes de chauffage, de ventilation et de
            climatisation. Enfin, il peut aider à réduire l'impact environnemental en réduisant les émissions de gaz à effet
            de serre. En réalisant un audit énergétique, vous pourrez obtenir une image précise de la performance
            énergétique de votre bâtiment, ce qui vous permettra de prendre des décisions éclairées pour améliorer son
            efficacité énergétique.</p>
          <h2>Comment se déroule un audit énergétique ?</h2>
          <p>Un audit énergétique peut être réalisé par une entreprise spécialisée ou par un expert interne à l'entreprise.
            Il implique généralement une inspection visuelle du bâtiment, ainsi qu'une analyse approfondie des données de
            consommation d'énergie. L'audit peut également impliquer des mesures physiques, telles que des tests
            d'étanchéité, des mesures de l'éclairage et des mesures de la température et de l'humidité. L'ensemble du
            processus est conçu pour identifier les points faibles de la performance énergétique de votre bâtiment et
            proposer des solutions pour les améliorer.</p>
          <h3>Les différentes étapes de l'audit énergétique</h3>
          <p>Un audit énergétique se déroule en plusieurs étapes clés. Tout d'abord, une inspection visuelle du bâtiment est
            réalisée pour identifier les faiblesses potentielles et les problèmes de performance énergétique. Ensuite, les
            données de consommation d'énergie du bâtiment sont analysées pour comprendre les habitudes de consommation et
            les coûts associés. Des mesures physiques peuvent également être effectuées, telles que des tests d'étanchéité
            et des mesures de la température et de l'humidité. Enfin, un rapport complet est rédigé pour présenter les
            résultats de l'audit et les recommandations pour améliorer la performance énergétique du bâtiment.</p>
          <h3>Qui peut réaliser un audit énergétique ?</h3>
          <p>Un audit énergétique peut être réalisé par une entreprise spécialisée ou par un expert interne à l'entreprise.
            Il est recommandé de faire appel</p>
          <div class="flex flex-col justify-center items-center gap-1 w-full">
            <ButtonBlockSecondary to="tel:+33660393750">Appelez-nous pour être conseillé</ButtonBlockSecondary>
            <p class="text-base text-center">Notre numéro : 06.60.39.37.50</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SectionReviews />
  <SectionWantContactUs /></template>
<script setup lang="ts">
const title = ref("DPE | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
const description = ref("Chez Diagnotimmopro, nous offrons le meilleur service de diagnostic immobilier, garanti par des professionnels certifiés. Nous nous engageons à fournir un service de qualité supérieure à des prix compétitifs. Fiers de notre réputation dans le domaine, nous garantissons la sécurité et la santé des occupants de votre bien immobilier.")
useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})
useServerSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogUrl: 'https://diagnostimmopro.com',
  ogType: 'website',
  ogImage: 'https://res.cloudinary.com/dj5fs1uis/image/upload/f_auto,q_auto/v1682718006/phone_man.webp',
  twitterCard: 'summary_large_image',
})
</script>