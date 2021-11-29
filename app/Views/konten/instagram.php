<?php
//php foreach loop
// foreach ($profile as $key => $value) {
//     echo $value . "<br>";
// }
// foreach ($media['data'] as $m) {
//     echo $m['id'] . "<br>";
// }

?>
<?= $this->extend('konten/index'); ?>
<?= $this->section('content'); ?>
<div class="container">
    <div class="row">
        <div class="col">
            <h1><?= $title; ?></h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col">
            <table>
                <tr>
                    <td><?= $profile['username']; ?></td>
                    <td><?= $profile['media_count'] ; ?></td>
                    <td><?= $profile['account_type'] ; ?></td>
                </tr>
            </table>
        </div>
    </div>
</div>
    <div class="container">
        <div class="row row-cols-3">
            <?php foreach ($media['data'] as $m) : ?>
                <div class="col">
                    <div class="card">
                        <img src="<?= $m['media_url']; ?>" class="card-img-top" alt="..." title="description">
                        <div class="card-body">
                            <div class="card-text h6 text-truncate" style="max-width:500px;">
                                <?= $m['caption']; ?>
                            </div>
                            <a href="<?= $m['permalink']; ?>" target="_blank">Lihat lebih detail</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">
                                <?= $m['timestamp']; ?>
                            </small>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
<div class="container">
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="/halaman/before/<?= $media['paging']['cursors']['after']; ?>" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

       
    <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li> -->
    <li class="page-item">
      <a class="page-link" href="/halaman/after/<?= $media['paging']['cursors']['after']; ?>" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

        </div>
    </div>
</div>
 <?= $this->endSection(); ?>