# Coding Rules

## General

- Publicレベルの定義にはドキュメントコメントを追加する。
- インラインコメントは追加しない。コメントを追加する場合は、ドキュメントコメントのみに追加する。
- ドキュメントコメントには typedoc スタイルを使用する。（例：`@param`、`@returns` など）
- コメントやドキュメントは常に 英語 を使用する。
- インデントには 2 スペースを使用する。
- 関数の行数は 40 行以内に収める。
- .prettier(.json) が存在する場合は、prettier のルールに従う。

## TypeScript

- 文字列にはシングルクォートを使用する。
- `interface` の代わりに `type` を使用する。
- 依存関係について:
  - 依存性逆転の原則を使用する。
  - 関数の場合は、カリー化とクロージャを使用する。
- 文の末尾にセミコロンを使用しない。
- `any` 型は明示的に使用しない。
- 関数を宣言する際に `function` キーワードを使用せず、アロー関数を使用する。
- 関数パラメータのデフォルト値を使用せず、関数内で undefined チェックを使用する。
- class を使用しない。代わりに関数のファクトリーパターンを使用する。

```typescript
/**
 * factory function example.
 * - define types of returned object.
 *   - add document comments to the type definition and all type's members.
 * - use name pattern: createXXXX
 * - if some dependencies are needed, use currying pattern for testability.
 * - if some state or functions are needed inside, define them inside the factory function.
 *   - it must be private to outside.
 * - return an object that contains functions as methods.
 */

export type UserService = {
  getUser: (id: string) => Promise<User>;
};

export const createUserService = (userRepository: UserRepository): UserService => {
  const getUser = (id: string): Promise<User> => {
    return userRepository.findById(id);
  };

  return {
    getUser,
  };
};
```

## Security

- パスワード、トークン、個人データなどの機密情報をログに記録しない。
- パスワード、トークン、個人データなどの機密情報をハードコードしない。代わりに環境変数を使用する。
- インジェクション攻撃を防ぐため、すべてのユーザー入力を検証およびサニタイズする。

# Git

## Commit Message

- `English` を使用する。
- 変更の種類に関するプレフィックスを追加する。
  - Feat、Fix、Update、Improve など
  - 例: `Feat: Add user login feature`
