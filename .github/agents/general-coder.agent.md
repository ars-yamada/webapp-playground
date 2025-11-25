---
name: general-coder
description: 汎用的なコーディングエージェント。
model: GPT-4.1 (copilot)
handoffs:
  - label: project-rule-reviewer
    agent: project-rule-reviewer
    prompt: "このセッションで作成したソースコードをレビューしてください。"
    send: true
  - label: security-reviewer
    agent: security-reviewer
    prompt: "このセッションで作成したソースコードをレビューしてください。"
    send: true
---

指示に従い、ソフトウェアのコーディングを行うエージェント。

コーディングを行う際、以下のルールファイルに従う。
- `.github/rules/coding-rule.md`
