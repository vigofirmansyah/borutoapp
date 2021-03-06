<?php

//php foreach loop
// foreach ($profile as $key => $value) {
//     echo $value . "<br>";
// }
// foreach ($media['data'] as $m) {
//     echo $m['id'] . "<br>";
// }
// $page =$profile['media_count']/ $limit; 
?>
<?= $this->extend('konten/index'); ?>
<?= $this->section('content'); ?>



<div class="container">
    <div class="row row-cols-2 row-cols-sm-3 gy-5  gx-5">
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
                        <small>
                            <?php date_default_timezone_set('Asia/Bangkok');
                            echo date('Y-m-d', strtotime($m['timestamp'])); ?>
                            <!-- <?= $m['timestamp']; ?> -->
                        </small>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col d-flex justify-content-center my-sm-3">
            <nav aria-label="Page navigation example">
                <ul class="pagination d-flex justify-content-around" id="pagination">
                    <li class="page-item mx-sm-2 <?= array_key_exists("previous", $media["paging"]) ? '' : 'invisible'; ?>">
                        <a class="page-link" href="/halaman/before/<?= $media['paging']['cursors']['before']; ?>" aria-label="Previous">
                            <span>Previous</span>
                        </a>
                    </li>

                    <li class="page-item mx-sm-2">
                        <a class="page-link" href="/halaman/after/<?= $media['paging']['cursors']['after']; ?>" aria-label="Next">
                            <span>Next</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</div>
<?= $this->endSection(); ?>