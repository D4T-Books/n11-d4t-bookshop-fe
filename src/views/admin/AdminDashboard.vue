<script setup>
  import { onMounted, ref } from "vue";
  import Header from "../../components/admin_ui/Header.vue";
  import Sidebar from "../../components/admin_ui/Sidebar.vue";
  import Footer from "../../components/admin_ui/Footer.vue";
  import CardInfor from "../../components/admin_ui/CardInfor.vue";
  import ChartDemo from "../../components/admin_ui/ChartDemo.vue";
  import getReq from "@/api/get";

  const cardInfos = ref([
    {
      title: "Người dùng mới",
      counter: 19,
      severity: "success",
      icon: "pi pi-user-plus",
      desc: "so với tuần trước",
    },
    {
      title: "Số lượng sách hiện tại",
      counter: 20,
      severity: "info",
      icon: "pi pi-book",
      desc: "tổng số lượng",
    },
    {
      title: "Giao dịch mới trong ngày",
      counter: 21,
      severity: "warning",
      icon: "pi pi-credit-card",
      desc: "trong ngày",
    },
  ]);

  const callAPI = async () => {
    const res = await getReq("/admin/users/count");
    const resBook = await getReq("/admin/books/count");
    const resTransaction = await getReq("/admin/transactions/count");

    cardInfos.value[0].counter = res.metadata.totalUser;
    cardInfos.value[1].counter = resBook.metadata.totalBook;
    cardInfos.value[2].counter = resTransaction.metadata.totalTransaction;
  };

  onMounted(callAPI);
</script>

<template>
  <Header></Header>
  <div class="flex">
    <Sidebar></Sidebar>
    <div class="flex flex-col">
      <div class="flex gap-8 mt-5">
        <CardInfor
          v-for="(cardInfo, index) in cardInfos"
          :key="index"
          :title="cardInfo.title"
          :counter="cardInfo.counter"
          :severity="cardInfo.severity"
          :icon="cardInfo.icon"
          :desc="cardInfo.desc"
        ></CardInfor>
      </div>

      <div class="mt-[50px]">
        <ChartDemo></ChartDemo>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped></style>
