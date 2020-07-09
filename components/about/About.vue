<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="text-center mb-4">
          <h1>
            ABOUT
            <span>US</span>
          </h1>
          <Separator />
        </div>
        <p class="text-justify">
          <b>
            <i>
              Better Life Social Organization, BLSO Nepal is a non-profit, non-religious
              and non-political organization which was founded in 2011. We are the
              registered NGO under the Society Act of District Administration Office,
              Kathmandu (Reg. No. 723). We are affiliated with the Social Welfare
              Council of Nepal (SWC) (Affiliation No. 34389).
            </i>
          </b>

          <br />
          <br />BLSO Nepal focuses on
          development of community people who are expecting the support to raise
          their life standard. We conduct the projects which are related with
          agriculture, education, health and more. This organization has targeted to
          bring local and international volunteers together to support the society
          where many people are looking to be created opportunities for them with
          being competitive growing chances increasing their earnings to fight with
          their hard life.
        </p>
      </div>
      <div
        class="col-12 col-lg-6 px-3 text-center py-5 d-flex align-items-center justify-content-center"
      >
        <!-- <div
          class="image-holder"
          :style="`background-image: url(http://via.placeholder.com/476x431)`"
        ></div>-->
        <img src="/images/logo.jpg" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <p class="text-justify">
          In present situation in Nepal, there is necessary to be focused on national
          development with creating the ways of self sustaining environment in every
          level of poor class people. We want to bring hope of survival on those
          people who are seeing everywhere darkness because of hopelessness so
          that they could feel about the right of survival is for them also. These
          opportunities could be established for these people is possible after only
          we became friend on their troubles and difficulties go ahead with shaking
          hands or being helping hands for them. We became human when we will be
          able to create feelings of humanity. In this Twenty First Century even
          people fight for two times then what can they think for new or to be
          progressive so we have planned to make them out from thinking for what
          to eat or how to pay for education or how to make more earning in
          agriculture field with a very easy way. In reality, life is struggle even though
          there should be the value of struggle, the same condition BLSO Nepal
          wants to create in overall.
        </p>
        <br />
        <nuxt-link to="/contactus" tag="button" class="btn btn-outline-info mb-5">BECOME A VOLUNTEER</nuxt-link>
      </div>
    </div>

    <div class="row my-4">
      <div class="col-12">
        <div class="text-center mb-4">
          <h1>
            OUR
            <span>OBJECTIVES</span>
          </h1>
          <Separator />
        </div>
        <ul>
          <li>
            To nurture self-reliance among women through a number of initiatives including education through:
            <ol>
              <li>literacy classes;</li>
              <li>income generating opportunities;</li>
              <li>savings and credits groups;</li>
              <li>health, sanitation and the environment, and</li>
              <li>maintaining a functioning household.</li>
            </ol>
          </li>
          <li>To improve facilities for early childhood development.</li>
          <li>To provide a platform for children to participate in non-formal creative activities so they can develop life skills and be aware of their basic human rights.</li>
          <li>To help children who have suffered through conflict to regain access to education.</li>
          <li>To offer sponsored education opportunities to disadvantaged children, orphans, victims of conflict and children from low income families.</li>
          <li>To provide English language classes for young people, to enhance their social and professional skills, providing them with opportunities to volunteer within their local community.</li>
          <li>To raise awareness of the need for English language skills and to facilitate teaching English in schools, Buddhist monasteries and nunneries.</li>
          <li>To ensure quality education by providing teacher training, workshops, seminars and exchange visits.</li>
          <li>To seek resources and healthcare professionals to assist the health post to serve the local community.</li>
          <li>To increase awareness about the benefits of good sanitation and provide education in school for maintaining personal hygiene.</li>
          <li>To establish a Community Learning Center (CLC) to provide learning platforms for eliminating illiteracy and for the professional development of local people.</li>
          <li>To support orphanages by offering financial assistance for education, food and clothing.</li>
          <li>To support orphanages through the placement of volunteers to aid in the proper distribution and use of resources.</li>
          <li>To introduce Nepali culture to international volunteers and to ensure a safe and memorable stay in a supportive environment.</li>
          <li>To establish a structured, safe and professional volunteer team.</li>
        </ul>We are grateful for the tireless efforts of our volunteer staff and junior volunteers in the community. If you see an opportunity to provide support, please contact us. Join us - give your support in cash or kind today.
      </div>
    </div>

    <div class="row my-5 py-5">
      <div class="col-12">
        <div class="text-center mb-4">
          <h1>
            OUR
            <span>VISION &amp; MISSION</span>
          </h1>
          <Separator />
        </div>
        <ul>
          <li>To raise the standard living of all children to at least subsistence level.</li>
          <li>To help and encourage children to attain a minimum level of education.</li>
          <li>To demonstrate the skills required for survival through the provision of support for education, clothing and nutrition.</li>
        </ul>

        <p>
          BLSO is always eager to give a hand to those children who believe they have no future and are in great need of help to attain a minimum level of security and knowledge. Most parents are unable to send their children to school due to their very low income or absence of income. BLSO gives support and helps these children make a first step towards school attendance. Established in 2011, first carried out a study to ascertain the situation of those people living in remote areas. What was noted was the lack of education and suffering amongst children who have nothing and no hope. Many families in these areas have less than the subsistence minimum and there is no possibility of their children being able to go to school.
          <br />
          <br />We currently have 9 hard working, dedicated volunteers working with us. Up until now we have been operating in eastern Nepal, focusing mainly on children in remote country districts, who are completely without hope and have no future. We are here to help them build a future.
          <br />
          <br />We believe we can help the Nepalese people to build a better future by providing a trustworthy and valuable bridging mediation service.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/UI/Separator";

export default {
  components: {
    Separator
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.image-holder {
  height: 512px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

ul {
  list-style-type: square;
}
</style>