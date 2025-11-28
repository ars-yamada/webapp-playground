---
agent: agent
description: Gitコミットを実行する。
model: GPT-4.1 (copilot)
---

日本語でインタラクトし、以下を実行してください。

1. `git status`を実行し、ステージされている変更を確認する。
2. ステージされているファイルがない場合は処理を終了する。
3. `git commit`を実行する。ステージされている変更に基づき、以下のルールに従ってGitコミットメッセージを生成する。
  - 英語のメッセージとする。
  - メッセージは1行でサマリを記述する。
  - 変更の種類に応じて、以下のプレフィックスを使用する。
    - Feat, Fix, Update, Improve, etc.
    - Example: `Feat: Add user login feature`
