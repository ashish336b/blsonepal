<template>
  <div>
    <Cover image="http://via.placeholder.com/1920x350" current="Children Profile" />
    <div class="container py-5 my-5">
      <Card
        v-for="(child,index) in children"
        :key="index"
        :info="child"
        :cardId="`card_id_${firstName(child.name)}`"
      />

      <!-- <div class="row">
        <div class="col-12 my-3">
          <nav>
            <ul class="pagination ml-auto">
              <li class="page-item mr-1 disabled">
                <a class="page-link is-radiusless" href="#">
                  <i class="las la-angle-double-left"></i>
                </a>
              </li>
              <li class="page-item mx-1 active">
                <a class="page-link px-3" href="#">1</a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link px-3" href="#">2</a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link px-3" href="#">3</a>
              </li>
              <li class="page-item ml-1">
                <a class="page-link is-radiusless" href="#">
                  <i class="las la-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Cover from "@/components/UI/Cover";
import Card from "@/components/children/Card";

export default {
  data() {
    return {
      children: [
        {
          name: "Anish Kapari",
          description:
            "Anish Kapari is a 10-year-old boy. His family are without shelter and have a low income. They do not earn enough to cover their daily expenses. They want to send their son to school but cannot, due to a lack of financial support. Anish wants to go to school. He wants to become a social worker. We are waiting for your sponsorship.",
          image: "/images/children/anish.jpg"
        },
        {
          name: "Dil Kumar Kapari",
          description:
            "Dil Kumar Kapari is a talented boy. His parents don't earn enough to send him to school. He is from a large family and his parents cannot buy books, pencils and other necessities. His parents are appealing to you. Please help Dil Kumar Kapari. He is waiting for your support.",
          image: "/images/children/dil.jpg"
        },
        {
          name: "Firoj Kapari ",
          description:
            "Firoj Kapari is a talented boy. He has never had the chance to go to school because his family cannot afford it. In future, Firoj wants to become a doctor. He wants to go to school so he can accomplish this goal in the future. He likes to dance, play football and swim. He needs your kind assistance. Help him go to school.",
          image: "/images/children/firoz.jpg"
        },
        {
          name: "Mane",
          description:
            "Mane is a 7-year-old boy who is homeless. His father's income is very low and does not cover daily expenses. Mane lives with his family in temporary shelter (tents). His father cannot cover his education expenses, but really wants to send his son to school. They are appealing for a sponsor to help give Mane a bright future. We are waiting to hear from you.",
          image: "/images/children/mane.jpg"
        },
        {
          name: "Rupesh",
          description:
            "Rupesh is a talented boy who lives with his mother, father and four  siblings in a very poor community in Baktipur Sarlahi. His life is very difficult as his parents are unemployed. His parents are doing their best to provide for their children, but they do not make enough to meet their daily needs. Rupesh loves playing football with his friends. His favorite subject in school is math and his favorite color is red. He loves his parents when he grows up, his plan is to become a police officer. He is waiting for a sponsor.",
          image: "/images/children/rupesh.jpg"
        },
        {
          name: "Sandesh Kapari",
          description:
            "Sandesh Kapari is 12 years old. He is an active young boy who had to stop going to school because his family faced financial difficulties. His father is a village labourer and his income does not cover basic needs for everyday life. His parents are appealing to you. Please assist their son as an education sponsor.",
          image: "/images/children/sandesh.jpg"
        }
      ]
    };
  },

  methods: {
    firstName(name) {
      return name.split(" ")[0].toUpperCase();
    }
  },

  components: {
    Cover,
    Card
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.pagination {
  max-width: min-content;
  .page-item {
    a {
      color: $dark;
    }
    &:hover {
      a {
        transition: 128ms;
        color: #fff;
        background-color: $primary;
      }
    }
  }

  .active {
    a {
      border-color: $primary;
      background: $primary;
      color: #fff;
    }
  }

  .disabled {
    a {
      color: #ababab;
    }
    &:hover {
      a {
        color: #ababab;
        background-color: #fff;
      }
    }
  }
}
</style>