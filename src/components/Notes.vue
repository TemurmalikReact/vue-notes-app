<template>
  <div class="notes" :class="{ full: !grid }">
    <div v-for="note in notes" :key="note.id" class="note">
      <div class="note__header">
        <p>
          {{ note.title }}
        </p>
        <button @click="$emit('remove-note', note.id)" class="close">
          &times;
        </button>
      </div>
      <div class="note__body">
        <p>{{ note.description }}</p>
        <span>{{ note.date }}</span>
        <button class="edit" @click="$emit('open-modal', note.id)">
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  props: {
    notes: {
      type: Array,
      required: true,
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.notes {
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 25px;
  margin-bottom: 25px;

  &.full {
    grid-template-columns: 12fr;
  }

  .note {
    border: 1px solid rgb(225, 225, 225);
    padding: 20px;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all .15s ease-out;
    box-shadow: 0 0 15px rgb(225, 225, 225);

    &:hover {
      transform: scale(1.05);
    }

    &__header {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      p {
        font-size: 16px;
        color: rgb(50, 50, 225);
      }

      .close {
        color: rgb(225, 50, 50);
        font-size: 30px;
        line-height: 15px;
        background: none;
        border: none;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;

      p {
        font-size: 14px;
        color: rgb(25, 25, 25);
      }

      span {
        color: rgb(200, 200, 200);
        font-size: 12px;
      }

      button.edit {
        margin-top: 15px;
        width: fit-content;
        background: rgb(50, 50, 225);
        padding: 5px 15px; 
        color: #fff;
        border: none;
        border-radius: 25px;
      }
    }
  }
}
</style>
