from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import urllib.request
import time
import os


"""
*주의* 
Swiper Autoplay Option 적용된거는 슬라이드가 동적이기에 배열로 미리 정의 해서 반자동으로 짠 다음 가져오든지 해야함.

수정 해야될 목록
home page - mainBanner, recommend
recommend page
"""


def img_crawling(main_pv, sub_pv, url, css_selector):
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(3)

    images = driver.find_elements(By.CSS_SELECTOR, css_selector)
    img_urls = []

    for image in images:
        url = image.get_attribute("src")
        img_urls.append(url)

    img_folder = f"public/{main_pv}/{sub_pv}"

    if not os.path.isdir(img_folder):
        os.makedirs(img_folder)

    for idx, link in enumerate(img_urls):
        urllib.request.urlretrieve(link, f"{img_folder}/item_{idx+1}.jpg")

    driver.quit()


mainPv = {"home": "home", "recommend": "recommend", "brand": "brand"}
subPv = {
    "home": {
        "mainBanner": "mainBanner",
        "recommend": "recommend",
        "hotItem": "hotItem",
    },
    "brand": {"brandThum": "brandThum"},
}
urls = {
    "home": "https://kkst.kr/",
    "recommend": "https://kkst.kr/recommend2/",
    "brand": "https://kkst.kr/brand/",
}
cssSelectors = {
    "home": {
        "mainBanner": "div.main-wr div.main-slide div.swiper-slide a > img",
        "recommend": "div.main-wr div.recommend2-wr div.item div.ec-base-product ul.prdList > li.xans-record- > div.thumbnail > div.prdImg > a > img",
        "hotItem": "div.main-wr div.main-product-02 div.ec-base-product ul.prdList > li.xans-record- > div.thumbnail > div.prdImg > a > img",
    },
    "brand": {
        "brandThum": "div.brand-wr div.brand-list-area div.brand-item div.brand-thum > img"
    },
}

arg1 = mainPv["home"]
arg2 = subPv[arg1]["hotItem"]
arg3 = urls[arg1]
arg4 = cssSelectors[arg1][arg2]

img_crawling(
    arg1,
    arg2,
    arg3,
    arg4,
)
