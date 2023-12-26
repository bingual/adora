from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import urllib.request
import time
import os

# TODO: 현재 필요한 부분만 부분 구현. 나중에 DB에 데이터 넣을 떄 퍼펫티어 사용할지 셀레니움 사용할지 선택해야됨.


def brand_img(provider):
    if "brandThum" not in provider and "prodThum" not in provider:
        return

    driver = webdriver.Chrome()
    driver.get("https://kkst.kr/brand/")
    time.sleep(3)

    css_selector = (
        "div.brand-title > a > div.left-area > div > img"
        if "brandThum" in provider
        else "div.thumbnail > a > img"
        if "prodThum" in provider
        else None
    )

    images = driver.find_elements(By.CSS_SELECTOR, css_selector)
    img_urls = []

    for image in images:
        url = image.get_attribute("src")
        img_urls.append(url)

    img_folder = (
        "./public/brand/brandThum"
        if "brandThum" in provider
        else "./public/brand/prodThum"
        if "prodThum" in provider
        else None
    )

    if not os.path.isdir(img_folder):
        os.makedirs(img_folder)

    for idx, link in enumerate(img_urls):
        urllib.request.urlretrieve(link, f"{img_folder}/item_{idx+1}.jpg")

    driver.quit()


def home_img(provider):
    if ["hotItem"] not in provider:
        return

    driver = webdriver.Chrome()
    driver.get("https://kkst.kr/")
    time.sleep(3)

    anchor_box_id = [353, 352, 821, 823, 603, 822, 830, 824, 833, 232, 628, 580]
    img_urls = []
    for box_id in anchor_box_id:
        css_selector = f"#anchorBoxId_{box_id} > div.thumbnail > div.prdImg > a > img"
        images = driver.find_elements(By.CSS_SELECTOR, css_selector)

        for image in images:
            url = image.get_attribute("src")
            img_urls.append(url)

    img_folder = "public/home/hotItem"

    if not os.path.isdir(img_folder):
        os.makedirs(img_folder)

    for idx, link in enumerate(img_urls):
        urllib.request.urlretrieve(link, f"{img_folder}/item_{idx+1}.jpg")

    driver.quit()


provider_dict = {
    "brand": {"brandThum": "brandThum", "prodThum": "prodThum"},
    "home": {
        "hotItem": "hotItem",
    },
}
# brand_img(provider_dict.get("brand").get("prodThum"))
# home_img(provider_dict.get("home").get("hotItem"))
