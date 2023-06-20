<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String | null,
      required: true,
      default: "There is some Error",
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  p {
    color: rgb(225, 50, 50);
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
