<template>
  <div class="wrapper">
    <div @click="$emit('close-modal')" class="background"></div>
    <div class="modal">
      <div class="modal__header">
        <div class="title">{{ title }}</div>
        <span @click="$emit('close-modal')">&times;</span>
      </div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.$emit("close-modal");
      }
    });
  },
};
</script>
<style lang="scss">
.background {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(45, 45, 55, 0.55);
  width: 100%;
  height: 100vh;
}

.modal {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 400px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  &__content {
    flex: 1;
  }
}
</style>
