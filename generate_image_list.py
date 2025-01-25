import os

# 画像が保存されているフォルダのパスを指定してください
folder_path = "C:/Users/catlm/OneDrive/デスクトップ/Charasort/images"  # フォルダのパスをここに入力
output_file = "output.txt"

# テキストファイル用のリストを作成
entries = []

# フォルダ内の画像ファイルを取得
for filename in os.listdir(folder_path):
    # 拡張子チェック（必要なら拡張子を追加）
    if filename.endswith((".png", ".jpg", ".jpeg", ".gif")):
        # ファイル名（拡張子を除く）を取得
        name = os.path.splitext(filename)[0]
        # エントリをリストに追加
        entries.append(f'  {{ name: "{name}", image: "images/{filename}" }},')

# 結果をテキストファイルに書き込む
with open(output_file, "w", encoding="utf-8") as f:
    f.write("[\n")
    f.write("\n".join(entries))
    f.write("\n]")

print(f"{output_file} に出力しました！")
