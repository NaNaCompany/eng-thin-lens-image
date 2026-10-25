export const tool = {
  "id": "E045",
  "title": "얇은 렌즈 상거리 계산기",
  "inputs_text": "부호 있는 초점거리 f [m], 실물체 거리 d_o [m]",
  "formula": "d_i = 1 / (1/f − 1/d_o)",
  "output_text": "상거리 d_i [m]",
  "assumptions": "f≠0, d_o>0. 얇은 렌즈·근축광선·실물체 모델이다. 수렴렌즈 f>0, 발산렌즈 f<0, 허상 d_i<0를 명시하고 d_o=f는 유한 결과 대신 무한대 상태로 처리한다.",
  "purpose": "렌즈 상거리 계산 / 광학 벤치·카메라 기초 검산",
  "sources": [
    {
      "label": "OpenStax · Thin Lenses",
      "url": "https://openstax.org/books/university-physics-volume-3/pages/2-4-thin-lenses"
    }
  ],
  "slug": "eng-thin-lens-image",
  "category": "광학",
  "result_label": "얇은 렌즈 상거리 d_i",
  "result_dimension": "length",
  "fields": [
    {
      "key": "f",
      "label": "부호 있는 초점거리 f",
      "dimension": "length",
      "example": 0.1,
      "constraint": "nonzero",
      "display_unit": "m",
      "display_value": "0.1"
    },
    {
      "key": "do",
      "label": "실물체 거리 d_o",
      "dimension": "length",
      "example": 0.3,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "0.3"
    }
  ],
  "site": "https://nanalab.kr/eng-thin-lens-image/",
  "repository": "https://github.com/NaNaCompany/eng-thin-lens-image",
  "condition": "",
  "output_unit": "mm"
};
