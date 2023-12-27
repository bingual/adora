import os
import time
import urllib.request

from selenium import webdriver
from selenium.webdriver.common.by import By

"""
*주의* 
Swiper Autoplay Option 적용된거는 동적이고 중복 때문에 요소를 가져오기가 힘들어서 XPath로 되어 있기 때문에 변동사항에 따라 수정해줘야함.
다만 프로젝트 특성상 일회성으로만 사용할거고 시시 때때로 변하기도하니깐 데이터 다 집어넣고나면 쓸일 없을거 같음. 
어차피 나만 쓰는 개인용 자동화 툴 이니깐 고도화는 대충진행.

*차후 진행*
상품 평균 20개 * 브랜드 30개로 가정할 시 데이터만 600개 가량 넣어야 하고 좋아요 댓글은 크롤링 할 필요 없음.
퍼블리싱 작업 끝나면 DB 구성 한 다음 전부 다 크롤링해서 데이터 가져오고 인기 정렬은 전체 판매량 카운트 및 해당월의 상품 판매량 집계해서 처리 해야함.
"""


def img_crawling(main_pv, sub_pv, url, css_selector):
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(3)

    img_urls = []
    if sub_pv in "mainBanner":
        for i in range(7):
            re_css_selector = css_selector.replace("div[2]", f"div[{2 + i}]")
            images = driver.find_elements(
                By.XPATH,
                re_css_selector,
            )
            for image in images:
                url = image.get_attribute("src")
                img_urls.append(url)
    elif sub_pv in "recommend":
        for i in range(12):
            re_css_selector = css_selector.replace("li[4]", f"li[{4 + i}]")
            images = driver.find_elements(
                By.XPATH,
                re_css_selector,
            )
            for image in images:
                url = image.get_attribute("src")
                img_urls.append(url)
    else:
        images = driver.find_elements(By.CSS_SELECTOR, css_selector)
        for image in images:
            url = image.get_attribute("src")
            img_urls.append(url)

    img_folder = f"public/{main_pv}/{sub_pv}"

    if not os.path.isdir(img_folder):
        os.makedirs(img_folder)

    for idx, link in enumerate(img_urls):
        urllib.request.urlretrieve(link, f"{img_folder}/item_{idx+1}.jpg")

    driver.quit()


mainPv = {
    0: "home",
    1: "discount",
    2: "recommend",
    3: "brand",
}
subPv = {
    "home": {
        0: "mainBanner",
        1: "recommend",
        2: "hotItem",
    },
    "discount": {0: "mainThum", 1: "subThum"},
    "brand": {0: "brandThum", 1: "prodThum"},
}
urls = {
    "home": "https://kkst.kr/",
    "discount": "https://kkst.kr/recommend/",
    "recommend": "https://kkst.kr/recommend2/",
    "brand": "https://kkst.kr/brand/",
}
cssSelectors = {
    "home": {
        "mainBanner": "/html/body/div[1]/div[1]/div[4]/div/div/div[1]/div[1]/div[2]/a/img",
        "recommend": "/html/body/div[1]/div[1]/div[4]/div/div/div[4]/div[2]/div[1]/ul/li[4]/div[1]/div[1]/a/img",
        "hotItem": "div.main-wr div.main-product-02 div.ec-base-product ul.prdList > li.xans-record- > div.thumbnail > div.prdImg > a > img",
    },
    "discount": {
        "mainThum": "div.recommend-wr div.main-product-03 div.ec-base-product ul.prdList > li.xans-record- > div.sale-img > a > img",
        "subThum": "div.recommend-wr div.main-product-03 div.ec-base-product ul.prdList > li.xans-record- > div.sale-grid > div.thumbnail > div.prdImg > a > img",
    },
    "brand": {
        "brandThum": "div.brand-wr div.brand-list-area div.brand-item div.brand-thum > img",
        "prodThum": "div.brand-wr div.brand-list-area div.brand-item.item01 ul.brand-product-wr > li > div.thumbnail > a > img",
    },
}

print(list(mainPv.items()))
inp1 = int(input("Select main go on: "))
print(list(subPv.items()))
inp2 = int(input("Select sub go on: "))

arg1 = mainPv[inp1]
arg2 = subPv[arg1][inp2]
arg3 = urls[arg1]
arg4 = cssSelectors[arg1][arg2]

img_crawling(
    arg1,
    arg2,
    arg3,
    arg4,
)
