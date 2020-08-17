$(".product-colors span").click(function(){
  $(".product-colors span").removeClass("active");
  $(this).addClass("active");
  $("body").css("background", $(this).attr("data-color")); // Troca de cor de fundo
  $(".product-price").css("color", $(this).attr("data-color")); // Troca de cor do preço
})