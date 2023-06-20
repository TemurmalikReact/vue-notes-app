<template>
  <div class="edit">
    <label class="edit__item">
      <span>Title</span>
      <input v-model="note.title" type="text" />
    </label>
    <label class="edit__item textarea-wrapper">
      <span>Description</span>
      <textarea v-model="note.description"></textarea>
    </label>
    <div class="edit__item button-wrapper">
      <button @click="editNote">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditNote",
  data() {
    return {
      note: {
        id: null,
        title: "",
        description: "",
        date: ""
      },
    };
  },
  mounted() {
    this.note = this.modalNote
  },

  props: ["modalNote"],
  methods: {
    editNote() {
      this.$emit("edit-note", this.note);
    },
  },
};
</script>

<style lang="scss" scoped>
.edit {
  &__item {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    &.textarea-wrapper {
      height: 150px;
    }

    &.button-wrapper {
      align-items: center;
    }

    span {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input,
    textarea {
      resize: none;
      padding: 7.5px 15px;
      border-radius: 0px;
      border: 1px solid rgb(245, 245, 245);
      outline: none;
      font-weight: 600;
      width: 100%;
      height: 100%;

      &:focus {
        border-color: #000;
      }
    }

    button {
      width: fit-content;
      padding: 10px 25px;
      font-family: "Montserrat";
      border-radius: 30px;
      border: none;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      background: rgb(50, 50, 225);

      &:hover {
        background: rgb(75, 75, 250);
      }
    }
  }
}
</style>
