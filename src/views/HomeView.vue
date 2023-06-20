<template>
  <div class="grid">
    <div class="content">
        <div class="title">This is an Application used to create notes</div>
        <div class="sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate eum officia accusamus. Ducimus id odit quaerat cum laborum atque iste explicabo voluptas natus quos officiis quisquam nulla ab eaque quod, tenetur unde non consectetur pariatur ut sint. Quo ducimus neque expedita molestias, praesentium rerum quidem eveniet dolores soluta quam.
        </div>
    </div>
    <img src="https://media.istockphoto.com/id/1341466569/vector/people-create-different-quality-content-for-social-media-copywriter-with-pencil-writes.jpg?s=612x612&w=0&k=20&c=f_QiFfmuC2QrBoBRXKC81NcqG2MWnP07--M3oIgwb34=" alt="">
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scope>
.grid {
    display: grid;
    grid-template-columns: 6fr 6fr;

    .content {
      padding: 50px 150px;
    
      .title {
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 25px;
        color: rgb(75, 75, 175);
      }
    
      .sub {
        font-size: 15px;
        line-height: 25px;
      }
    }
}
</style>
