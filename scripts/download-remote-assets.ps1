$ErrorActionPreference = "Stop"
$root = "c:\Users\JamesTalbot\.cursor\easy-digital-solutions\public"
$downloads = @(
  @{ Url = "https://static.wixstatic.com/media/be63cf_7ca150dbaf2f4538b30a32c2395d5956~mv2.jpg/v1/fill/w_1286,h_633,al_c,q_85,enc_avif,quality_auto/Testimonial.jpg"; Path = "$root\testimonials\gallery\client-feedback.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_7f88f28fd0c345d4a3992bb9903c2e58~mv2.png/v1/fill/w_705,h_675,al_c,q_90,enc_avif,quality_auto/Screenshot%202025-05-13%20192633.png"; Path = "$root\testimonials\gallery\project-testimonial.png" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_806b67f6e49147a8b0dc2fa42fa7721c~mv2.jpg/v1/fill/w_1253,h_440,al_c,q_85,enc_avif,quality_auto/islandcraft.jpg"; Path = "$root\testimonials\gallery\island-craft.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_81ccec147cbe4769a84aa28fc7789b1a~mv2.png/v1/fill/w_824,h_571,al_c,lg_1,q_90,enc_avif,quality_auto/Dan%20Forsyth_PNG.png"; Path = "$root\testimonials\gallery\dan-forsyth.png" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_be03e766a8c24f108a3fd2a20dfa0270~mv2.jpg/v1/fill/w_695,h_774,al_c,q_85,enc_avif,quality_auto/ANONYMOUS.jpg"; Path = "$root\testimonials\gallery\anonymous.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_c8a2ef3cdc04486690f70c8676781e70~mv2.jpg/v1/crop/x_189,y_0,w_911,h_565/fill/w_910,h_565,al_c,q_85,enc_avif,quality_auto/Patient%20Testimonial%20Share%20Template%20-%20Made%20with%20PosterMyWall.jpg"; Path = "$root\testimonials\gallery\health-patient.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_d12496359e20490ca2eaca25f53f6300~mv2.jpg/v1/crop/x_0,y_16,w_690,h_825/fill/w_690,h_825,al_c,q_85,enc_avif,quality_auto/DCD%20References%20Learning%20Solutions_Sept2023.jpg"; Path = "$root\testimonials\gallery\dcd-learning.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_ec0b9efe208246dfac41019a7423a7e9~mv2.png/v1/fill/w_805,h_722,al_c,q_90,enc_avif,quality_auto/TMO.png"; Path = "$root\testimonials\gallery\te-marae-ora.png" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_f34269f5b4994531a7703c369af8f486~mv2.jpg/v1/fill/w_904,h_307,al_c,lg_1,q_80,enc_avif,quality_auto/Testimonial%20flyer%20template%20(1)%20-%20Made%20with%20PosterMyWall.jpg"; Path = "$root\testimonials\gallery\training-flyer.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_eaed0929fe1848c98a479dc4f56977d8~mv2.png/v1/fill/w_1349,h_591,al_c,q_90,enc_avif,quality_auto/image%20(3).png"; Path = "$root\applications\application-form-5-speedi.png" },
  @{ Url = "https://static.wixstatic.com/media/11062b_d482f7fb62b04ae5a56d4235b94dac77~mv2.jpeg/v1/fill/w_800,h_533,al_c,q_85,enc_avif,quality_auto/11062b_d482f7fb62b04ae5a56d4235b94dac77~mv2.jpeg"; Path = "$root\excel\excel-workplace.jpeg" },
  @{ Url = "https://static.wixstatic.com/media/11062b_29153d68327e443b889640e85310e7ee~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,enc_avif,quality_auto/11062b_29153d68327e443b889640e85310e7ee~mv2.jpg"; Path = "$root\excel\excel-training-session.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_53a6108c1c9f468eaeac483c77388f59~mv2.jpg/v1/crop/x_40,y_47,w_437,h_419/fill/w_432,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/graphic-design-icon-png-16.jpg"; Path = "$root\digital-marketing\graphic-design.jpg" },
  @{ Url = "https://static.wixstatic.com/media/be63cf_c3e15c4bc195470fa9b58b9a9e48ccbd~mv2.jpg/v1/crop/x_157,y_0,w_385,h_388/fill/w_450,h_440,al_c,lg_1,q_80,enc_avif,quality_auto/social%20media1.jpg"; Path = "$root\digital-marketing\social-media.jpg" }
)
foreach ($item in $downloads) {
  $dir = Split-Path $item.Path -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  Invoke-WebRequest -Uri $item.Url -OutFile $item.Path
  Write-Host "Downloaded $($item.Path)"
}
