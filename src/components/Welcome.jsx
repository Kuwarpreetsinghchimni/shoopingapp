export default function Welcome(props) {
  return (
<div class="card" style={{width: 18+"rem"}}>
  <div class="card-body">
    <img src={props.img} class="card-img" alt={props.title} />
    <h5 class="mt-2 mb-0">Image within the body</h5>
    <p class="card-text fg-2">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <small class="fg-3">Last updated 3 mins ago</small>
  </div>
</div>
  );
}