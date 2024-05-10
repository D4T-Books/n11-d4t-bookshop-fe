<script>
  import { defineComponent } from "vue";

  import { isNavigationFailure } from "vue-router";

  export default defineComponent({
    name: "Kinhhoat",
    data() {
      return {
        isNotificationVisible: true,
      };
    },
    methods: {
      onGroupContainerClick() {
        this.$router.push("/Nap/Payment/tht");
      },
      onGroupButtonClick() {
        this.isNotificationVisible = true;
        // Tắt thông báo sau 10 giây
        setTimeout(() => {
          this.isNotificationVisible = true;
        }, 10000);
      },
      closeNotification() {
        this.isNotificationVisible = false;
      },
    },
  });
</script>

<template>
  <section
    class="w-[1418px] flex flex-row items-start justify-end pt-0 px-[51px] pb-[19.9px] box-border max-w-full mq1350:pl-[25px] mq1350:pr-[25px] mq1350:box-border"
  >
    <form
      class="m-0 flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full shrink-0"
    >
      <div
        class="flex flex-row items-end justify-start gap-[4px] max-w-full mq800:flex-wrap"
      >
        <div
          class="box-border flex flex-col items-start justify-end max-w-full px-0 pt-0 pb-px"
        >
          <div
            class="h-[70.7px] relative leading-[43.2px] text-black text-left flex items-center shrink-0 z-[3] mq800:text-5xl mq450:text-lg"
          >
            <span>
              <p class="m-0">
                <b class="text-13xl font-segoe-ui">Kích hoạt mã Code</b>
              </p>
              <p class="m-0 text-14xl font-segoe-ui">
                Nhận ngay Hạt Sồi vào tài khoản.
              </p>
            </span>
          </div>
        </div>
        <div
          class="h-10 w-[198px] relative cursor-pointer flex items-center"
          @click="onGroupContainerClick"
        >
          <div
            class="absolute top-[7px] left-[0px] text-14xl font-segoe-ui text-green text-left inline-block w-full h-full mq800:text-5xl mq450:text-lg"
            style="white-space: nowrap"
          >
            Tìm hiểu thêm.
          </div>
          <div
            class="absolute top-[45px] left-[2px] box-border w-[200px] h-[2px] border-t-[2px] border-solid border-green"
          />
        </div>
      </div>
      <div
        class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[43px] max-w-full mq800:gap-[21px]"
      >
        <div
          class="flex-1 rounded-xl bg-white box-border flex flex-row items-start justify-start pt-[23px] px-[41px] pb-[22px] min-w-[208px] max-w-full border-[1px] border-solid border-black"
        >
          <div
            class="h-[92px] w-[957px] relative rounded-xl bg-white box-border hidden max-w-full border-[1px] border-solid border-black"
          />
          <input
            class="w-1000 [border:none] [outline:none] font-segoe-ui text-13xl bg-[transparent] h-[43px] relative text-black text-left flex items-center p-0 z-[1] mq800:text-7xl mq450:text-lgi"
            placeholder="Nhập mã code"
            type="text"
          />
        </div>
        <button
          class="cursor-pointer [border:none] pt-[18px] px-[45px] pb-6 bg-mediumgreen-100 rounded-31xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumgreen-200 mq450:pl-5 mq450:pr-5 mq450:box-border"
          @click="onGroupButtonClick"
          style="margin-right: -65px"
        >
          <div
            class="h-[80px] w-[316px] relative rounded-31xl bg-mediumgreen-100 hidden"
          />
          <b class="relative text-13xl font-segoe-ui text-white text-left z-[1]"
            >Kích hoạt ngay</b
          >
        </button>
      </div>
    </form>
    <Toast />
  </section>
  <div
    v-if="isNotificationVisible"
    class="notification"
  >
    Thông báo của bạn ở đây!
    <span
      @click="closeNotification"
      class="close-button brown"
      >Đóng</span
    >
  </div>
</template>
<!-- <script setup>
import{useToast} from "primevue/usetoast";
import showNotification from "../../utils/showNotification.js";
const toast = useToast();
showNotification(toast,"success","Thông báo",response.data.message);
</script> -->

<style scoped>
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
  .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  /* Colors */
  .white {
    color: #fff;
  }

  .sandybrown {
    color: rgba(255, 199, 120, 0.75);
  }
  .border-sandybrown {
    border-color: rgba(255, 199, 120, 0.75);
  }
  .bg-sandybrown {
    background-color: rgba(255, 199, 120, 0.75);
  }
  .black {
    color: #000;
  }

  .cornsilk {
    color: #faf4d4;
  }

  .brown {
    color: #9f2d2d;
  }

  .text-green {
    color: #119663;
  }
  .border-green {
    border-color: #119663;
  }
  .gainsboro-100 {
    color: #d9d9d9;
  }
  .border-gainboro-100 {
    border-color: #d9d9d9;
  }

  .bg-gainsboro-100 {
    background-color: #d9d9d9;
  }
  .gainsboro-200 {
    color: rgba(217, 217, 217, 0.25);
  }

  .bg-gainsboro-200 {
    background-color: rgba(217, 217, 217, 0.25);
  }
  .gainsboro-300 {
    color: #119663;
  }

  .aquamarine {
    color: #8bf8c4;
  }

  .text-chocolate {
    color: #c17011;
  }

  .bg-mediumgreen-100 {
    background-color: #10b981;
  }

  .bg-mediumgreen-200 {
    background-color: #00a169;
  }

  .gray-100 {
    color: #898989;
  }

  .border-gray-100 {
    border-color: #d9d9d9;
  }
  .gray-200 {
    color: rgba(0, 0, 0, 0.4);
  }

  .whitesmoke {
    color: #efefef;
  }

  /* Spacing - no custom spacing defined */

  /* Font Family */
  .roboto {
    font-family: Roboto;
  }

  .segoe-ui {
    font-family: "Segoe UI";
  }

  /* Border Radius */
  .rounded-6xl {
    border-radius: 25px;
  }

  .rounded-31xl {
    border-radius: 50px;
  }

  .rounded-30xl {
    border-radius: 45px;
  }

  .rounded-8xs {
    border-radius: 5px;
  }

  /* Font Size */
  .text-lg {
    font-size: 18px;
  }

  .text-xl {
    font-size: 20px;
  }

  .text-base {
    font-size: 16px;
  }

  .text-5xl {
    font-size: 24px;
  }

  .text-lgi {
    font-size: 19px;
  }

  .text-13xl {
    font-size: 32px;
  }

  .text-14xl {
    font-size: 30px;
  }

  .text-7xl {
    font-size: 26px;
  }

  .text-45xl {
    font-size: 64px;
  }

  .text-xs {
    font-size: 12px;
  }

  .text-inherit {
    font-size: inherit;
  }

  /* Screens - no custom screen sizes defined */
</style>
