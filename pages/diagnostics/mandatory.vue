<template>
  <SectionHeader>
    <template v-slot:header>
      Les diagnostics immobiliers obligatoires&#160;: <span class="text-lemon">tout ce que vous devez savoir</span>.
    </template>
    <template v-slot:subtitle>
      Retrouvez tous les diagnostics obligatoires selon votre situation. Besoin d'un accompagnement ? Contactez-nous !
    </template>
    <template v-slot:firstButton>Obtenir mon devis</template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>Appelez-nous</template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img src="/lady-shoulders.webp" alt="Un homme commande un diagnostic immobilier sur son téléphone"
        provider="cloudinary" class="mt-12" />
    </template>
  </SectionHeader>

  <div class="section">
    <h2>Quels sont les diagnostics immobiliers obligatoires&#160;?</h2>
    <p>
      Les diagnostics immobiliers obligatoires évaluent l'état du bien et détectent les risques pour la santé, la sécurité
      et l'environnement. Ils sont indispensables avant toute transaction immobilière ou location, réalisés par des
      professionnels certifiés et régis par la loi. Découvrez les diagnostics obligatoires.
    </p>
    <ButtonBlockTertiary to="#heightSaleSection">Pour la vente</ButtonBlockTertiary>
    <ButtonBlockTertiary to="#heightRentSection">Pour la location</ButtonBlockTertiary>
  </div>

  <div class="section bg-light-100" id="heightSaleSection">
    <h2 class="text-dark-600">Quels sont les {{ totalSale }} diagnostics immobiliers obligatoires pour la vente&#160;?
    </h2>
    <v-carousel height="35em" hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="sale in sales">
        <Card class="darkCard mx-1">
          <template v-slot:id>{{ sale.id }}</template>
          <template v-slot:total>{{ totalSale }}</template>
          <template v-slot:title>{{ sale.title }}</template>
          <template v-slot:text>{{ sale.text }}</template>
          <template v-slot:additionnal>
            <div class="flex flex-col items-start gap-1">
              <div class="flex flex-col items-start gap-1">
                <div class="flex flex-col items-start gap-1">
                  <MoleculesIconText class="bodyChip flex items-center py-0.5 px-3 gap-1 rounded-3xl">
                    <template v-slot:icon>
                      <Icon name="mdi:house-outline" size="1.3125em" class="min-w-[1.3125em]" />
                    </template>
                    <template v-slot:label><p class="text-base font-bold">Type de bien</p></template>
                  </MoleculesIconText>
                  <p class="text-lg">
                    {{ sale.type }}
                  </p>
                  <MoleculesIconText class="bodyChip flex items-center py-0.5 px-3 gap-1 rounded-3xl">
                    <template v-slot:icon>
                      <Icon name="mdi:calendar-outline" size="1.3125em" class="min-w-[1.3125em]" />
                    </template>
                    <template v-slot:label><p class="text-base font-bold">Validité</p></template>
                  </MoleculesIconText>
                  <p class="text-lg">
                    {{ sale.availability }}<br>{{ sale.availability2 }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </v-carousel-item>
    </v-carousel>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockForest to="/quotation">Obtenir mon devis</ButtonBlockForest>
      <p class="text-base text-center">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockSecondary to="tel:+33660393750">Appelez-nous pour être conseillé</ButtonBlockSecondary>
      <p class="text-base text-center">Notre numéro : 06.60.39.37.50</p>
    </div>
  </div>

  <div class="section bg-grey-100" id="heightRentSection">
    <h2 class="text-dark-600">Quels sont les {{ totalRent }} diagnostics immobiliers obligatoires pour la location&#160;?
    </h2>
    <v-carousel height="41.5em" hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="rent in rents">
        <Card class="lightCard mx-1">
          <template v-slot:id>{{ rent.id }}</template>
          <template v-slot:total>{{ totalRent }}</template>
          <template v-slot:title>{{ rent.title }}</template>
          <template v-slot:text>{{ rent.text }}</template>
          <template v-slot:additionnal>
            <div class="flex flex-col items-start gap-1">
              <div class="flex flex-col items-start gap-1">
                <div class="flex flex-col items-start gap-1">
                  <MoleculesIconText class="bodyChip flex items-center py-0.5 px-3 gap-1 rounded-3xl">
                    <template v-slot:icon>
                      <Icon name="mdi:house-outline" size="1.3125em" class="min-w-[1.3125em]" />
                    </template>
                    <template v-slot:label><p class="text-base font-bold">Type de bien</p></template>
                  </MoleculesIconText>
                  <p class="text-lg">
                    {{ rent.type }}
                  </p>
                  <MoleculesIconText class="bodyChip flex items-center py-0.5 px-3 gap-1 rounded-3xl">
                    <template v-slot:icon>
                      <Icon name="mdi:calendar-outline" size="1.3125em" class="min-w-[1.3125em]" />
                    </template>
                    <template v-slot:label><p class="text-base font-bold">Validité</p></template>
                  </MoleculesIconText>
                  <p class="text-lg">
                    {{ rent.availability }}<br>{{ rent.availability2 }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </v-carousel-item>
    </v-carousel>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockForest to="/quotation">Obtenir mon devis</ButtonBlockForest>
      <p class="text-base text-center">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockSecondary to="tel:+33660393750">Appelez-nous pour être conseillé</ButtonBlockSecondary>
      <p class="text-base text-center">Notre numéro : 06.60.39.37.50</p>
    </div>
  </div>

  <div class="section">
    <h2>Que devez-vous savoir sur les diagnostics immobiliers obligatoires&#160;?</h2>
    <p class="text-justify">Les diagnostics immobiliers obligatoires sont des expertises techniques qui permettent
      d'évaluer l'état d'un bien immobilier dans le but de garantir la sécurité et la santé des occupants, de protéger
      l'environnement et de prévenir les vices cachés. Ils sont également indispensables pour faciliter les transactions
      immobilières en fournissant aux parties prenantes des informations précises sur l'état du bien. Dans cet article,
      nous allons vous expliquer tout ce que vous devez savoir sur les diagnostics immobiliers obligatoires, leurs enjeux,
      leurs objectifs, leur déroulement et les sanctions en cas de non-réalisation.</p>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockSecondary to="tel:+33660393750">Appelez-nous pour être conseillé</ButtonBlockSecondary>
      <p class="text-base text-center">Notre numéro : 06.60.39.37.50</p>
    </div>

    <h2>Pourquoi réaliser un diagnostic immobilier obligatoire&#160;?</h2>
    <h3 class="text-left">Pour assurer la sécurité des occupants et protéger l'environnement</h3>
    <p class="text-justify">Les diagnostics immobiliers obligatoires permettent d'évaluer les risques pour la santé et la
      sécurité des occupants du bien immobilier, ainsi que les risques environnementaux tels que la présence d'amiante, de
      plomb, de termites, ou encore de pollution des sols. Ils permettent ainsi de prendre des mesures de prévention et de
      sécurité pour éviter tout danger pour les occupants et pour l'environnement.</p>
    <h3 class="text-left">Pour évaluer l'état du bien immobilier et prévenir les vices cachés</h3>
    <p class="text-justify">Les diagnostics immobiliers obligatoires permettent d'évaluer l'état général du bien
      immobilier, en identifiant d'éventuels vices cachés ou défauts qui pourraient impacter sa valeur. Ils permettent
      ainsi aux parties prenantes d'avoir une vision claire de l'état du bien et d'éviter tout litige ultérieur.</p>
    <h3 class="text-left">Pour faciliter la transaction immobilière et éviter les litiges</h3>
    <p class="text-justify">Les diagnostics immobiliers obligatoires sont également indispensables pour faciliter la
      transaction immobilière en fournissant aux parties prenantes des informations précises sur l'état du bien. Ils
      permettent ainsi d'éviter tout litige ultérieur en fournissant une base objective et fiable pour la négociation.</p>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockPrimary to="/quotation">Demandez un devis gratuit</ButtonBlockPrimary>
      <p class="text-base text-center">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>

    <h2>Comment se déroule un diagnostic immobilier obligatoire ?</h2>
    <p class="text-justify">Le diagnostic immobilier obligatoire doit être réalisé par un professionnel certifié et
      indépendant. Le diagnostiqueur immobilier doit être assuré pour couvrir les éventuels dommages causés par ses
      prestations. Le déroulement du diagnostic immobilier varie en fonction du type de diagnostic à réaliser, mais en
      général, il consiste en une inspection visuelle et/ou des mesures et prélèvements pour réaliser des analyses en
      laboratoire. Le diagnostiqueur immobilier remet ensuite un rapport de diagnostic complet, précisant les résultats de
      l'expertise et les éventuelles recommandations à suivre.</p>
    <h3 class="text-left">Sanctions en cas de non-réalisation d'un diagnostic immobilier obligatoire</h3>
    <p class="text-justify">La non-réalisation d'un diagnostic immobilier obligatoire peut entraîner des sanctions
      financières et pénales. En effet, la loi impose aux propriétaires de réaliser les diagnostics immobiliers
      obligatoires avant toute transaction immobilière ou location. Si le diagnostic immobilier n'est pas réalisé dans les
      délais impartis ou s'il est erroné, le propriétaire peut être poursuivi en justice et condamné à payer des amendes,
      des dommages et intérêts, voire à subir des peines de prison.</p>
    <h3 class="text-left">Conclusion</h3>
    <p class="text-justify">En conclusion, les diagnostics immobiliers obligatoires sont indispensables pour garantir la
      sécurité et la santé des occupants, protéger l'environnement, prévenir les vices cachés et faciliter les
      transactions immobilières. Il est important de faire appel à un diagnostiqueur immobilier certifié et indépendant
      pour réaliser les expertises et de respecter les délais impartis pour éviter les sanctions. N'hésitez pas à
      contacter notre entreprise spécialisée dans les diagnostics immobiliers obligatoires pour obtenir un devis
      personnalisé et réaliser vos diagnostics en toute sérénité.</p>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockPrimary to="/quotation">Demandez un devis gratuit</ButtonBlockPrimary>
      <p class="text-base text-center">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockSecondary to="tel:+33660393750">Appelez-nous pour être conseillé</ButtonBlockSecondary>
      <p class="text-base text-center">Notre numéro : 06.60.39.37.50</p>
    </div>
  </div>
  <SectionReviews />
  <SectionWantContactUs />
</template>
<script lang="ts">
export default {
  data: () => ({
    totalSale: "8",
    totalRent: "7",
    sales: [
      {
        id: "1",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "2",
        title: "DPE",
        text: "Le DPE (Diagnostic de Performance Énergétique) permet d'informer les futurs occupants sur la consommation d'énergie et les émissions de gaz à effet de serre du logement.",
        type: "Tout bien immobilier",
        availability: "10 ans"
      },
      {
        id: "3",
        title: "Amiante",
        text: "Le diagnostic amiante permet de détecter la présence de matériaux contenant de l'amiante dans le logement afin de protéger la santé des occupants.",
        type: "Biens construits avant Juillet 1997 (Les diagnostics faits avant 2013 sont à refaire)",
        availability: "Si négatif : Illimité",
        availability2: "Si positif : 3 ans"
      },
      {
        id: "4",
        title: "Plomb",
        text: "Le diagnostic plomb permet de détecter la présence de plomb dans les peintures et revêtements, afin de protéger la santé des occupants contre le saturnisme.",
        type: "Biens construits avant 1949",
        availability: "Si négatif : Illimité",
        availability2: "Si positif : 1 an"
      },
      {
        id: "5",
        title: "Termites",
        text: "Le diagnostic termite permet de déceler la présence de termites dans un bien immobilier et de protéger votre habitation en anticipant tout risque d'infestation de termites.",
        type: "Biens situés dans une zone à risque selon arrêté préfectoral",
        availability: "6 mois"
      },
      {
        id: "6",
        title: "Électricité",
        text: "Le diagnostic électricité permet de s'assurer de la sécurité de l'installation électrique d'un bien immobilier. Il vise à identifier les risques d'accidents électriques et à proposer des solutions pour y remédier.",
        type: "Biens dont l’installation électrique intérieure a + de 15 ans",
        availability: "3 ans"
      },
      {
        id: "7",
        title: "Gaz",
        text: "Le diagnostic gaz permet d'identifier les éventuelles fuites de gaz et les risques d'explosion. Il doit être réalisé par un professionnel certifié.",
        type: "Biens dont l’installation de gaz intérieure a + de 15 ans",
        availability: "3 ans"
      },
      {
        id: "8",
        title: "ERP",
        text: "Le diagnostic ERP (État des Risques et Pollutions) permet d'identifier les risques naturels et technologiques, les pollutions des sols et des eaux, ainsi que les zones sismiques et de potentiels radon, sur un terrain ou un bien immobilier.",
        type: "Tout bien immobilier",
        availability: "6 mois"
      }
    ],
    rents: [
      {
        id: "1",
        title: "DAPP",
        text: "Le Diagnostic Amiante des Parties Privatives (DAPP) permet de repérer la présence d'amiante dans les parties privatives d'un bien immobilier. Il vise à protéger les occupants et les intervenants en cas de travaux ou de démolition.",
        type: "Partie privatives des biens construits avant Juillet 1997 (Les diagnostics faits avant 2013 sont à refaire)",
        availability: "Si négatif : Illimité",
        availability2: "Si positif : 3 ans"
      },
      {
        id: "2",
        title: "Plomb",
        text: "Le diagnostic plomb permet de détecter la présence de plomb dans les peintures et revêtements, afin de protéger la santé des occupants contre le saturnisme.",
        type: "Biens construits avant 1949",
        availability: "Si négatif : Illimité",
        availability2: "Si positif : 6 ans"
      },
      {
        id: "3",
        title: "DPE",
        text: "Le DPE (Diagnostic de Performance Énergétique) permet d'informer les futurs occupants sur la consommation d'énergie et les émissions de gaz à effet de serre du logement.",
        type: "Tout bien immobilier",
        availability: "10 ans"
      },
      {
        id: "4",
        title: "Loi Boutin",
        text: "Le mesurage de superficie Loi Boutin est une obligation légale pour les propriétaires qui souhaitent louer leur bien. Il permet de mesurer la surface habitable d'un logement et doit être mentionné dans le contrat de location.",
        type: "Obligatoire pour tout bien à usage d’habitation (location non meublée)",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "5",
        title: "Électricité",
        text: "Le diagnostic électricité permet de s'assurer de la sécurité de l'installation électrique d'un bien immobilier. Il vise à identifier les risques d'accidents électriques et à proposer des solutions pour y remédier.",
        type: "Biens dont l’installation électrique intérieure a + de 15 ans",
        availability: "6 ans"
      },
      {
        id: "6",
        title: "Gaz",
        text: "Le diagnostic gaz permet d'identifier les éventuelles fuites de gaz et les risques d'explosion. Il doit être réalisé par un professionnel certifié.",
        type: "Biens dont l’installation de gaz intérieure a + de 15 ans",
        availability: "6 ans"
      },
      {
        id: "7",
        title: "ERP",
        text: "Le diagnostic ERP (État des Risques et Pollutions) permet d'identifier les risques naturels et technologiques, les pollutions des sols et des eaux, ainsi que les zones sismiques et de potentiels radon, sur un terrain ou un bien immobilier.",
        type: "Tout bien immobilier",
        availability: "6 mois"
      },
    ]
  })
}
</script>
<script setup lang="ts">
const title = ref("Diagnostics obligatoires | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
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