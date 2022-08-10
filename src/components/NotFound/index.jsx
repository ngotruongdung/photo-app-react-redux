import React from "react";
import './NotFound.css'

function NotFound() {
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center"></h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Mấy má vào trang gì lung tung</h3>

                <p>Quay về trang chủ đê, nhấn nút bên dưới!</p>

                <a href="http://localhost:3000/" class="link_404">
                 Nút này nè
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
