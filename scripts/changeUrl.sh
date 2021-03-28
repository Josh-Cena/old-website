doc_list=( $(find ./docs -mindepth 2) )
for doc in "${doc_list[@]}"
do
    path="\"/img/""${doc%.*}""/"
    sed -i '' "s|\"https://mmbiz.qpic.cn/mmbiz_png/|${path}|g" "$doc"
    sed -i '' "s|\"https://mmbiz.qpic.cn/mmbiz_jpg/|${path}|g" "$doc"
    sed -i '' "s|/640?wx_fmt=|.|g" "$doc"
    sed -i '' -E "s|.png\">|.png\">|g" "$doc"
    sed -i '' -E "s|.jpeg\">|.jpeg\">|g" "$doc"
done
