# 커밋 메시지 (Commit Message)
<br>

## 1. Commit Message Structure
커밋 메시지는 아래와 같이 제목/본문/꼬리말의 구조로 작성
<div style="border: 2px solid grey; padding: 20px">
  type: Subject (제목)<br><br>
  body (본문)<br><br>
  footer (꼬리말)
</div>
<br>

## 2. Commit Type
<div style="border: 2px solid grey; padding: 20px">
  feat : 새로운 기능에 대한 커밋<br>
  fix : 버그 수정에 대한 커밋<br>
  build : 빌드 관련 파일 수정에 대한 커밋<br>
  chore : 그 외 자잘한 수정에 대한 커밋<br>
  ci : CI관련 설정 수정에 대한 커밋<br>
  docs : 문서 수정에 대한 커밋<br>
  style : 코드 스타일 혹은 포맷 등에 관한 커밋<br>
  refactor :  코드 리팩토링에 대한 커밋<br>
  test : 테스트 코드 수정에 대한 커밋<br>
  design: 디자인 관련 수정에 대한 커밋<br>
</div>
<br>

## 3. The Subject
<div style="border: 2px solid grey; padding: 20px">
  50자 이하, 대문자로 시작하여 작성하고, 마침표로 끝내지 않는다.<br>
  명령문으로 작성한다.<br>
  이렇게 작성하는 이유는 Git이 사용하는 메시지 형식을 맞춰 일관된 로깅을 위해.
  (Merge나 Update 등을 보면 알 수 있다.)
</div>
<br>

## 4. The Body
<div style="border: 2px solid grey; padding: 20px">
  72자 이하, 설명이 필요한 경우에만 작성한다. 코드 변경의 이유를 명확히 작성할수록 좋다.<br>
  어떻게 보다는 무엇을, 왜 하는지 설명한다.
</div>
<br>

## 5. The Footer
<div style="border: 2px solid grey; padding: 20px">
  선택사항이며, issue tracker ID를 참조하는 데 사용한다. 남겨주는 게 좋다.<br>
</div>
<br>

## 6. Example
<div style="border: 2px solid grey; padding: 20px">
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, preceded
by a single space, with blank lines in between, but conventions
vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
</div>
