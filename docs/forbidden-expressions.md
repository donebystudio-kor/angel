# 금지 표현 / 공통 규칙 (manifestation 재작성 + 심화 보강 공통)

**앞으로 manifestation 재작성 작업이든 심화 보강 작업이든, 모든 작업은 이 파일을
먼저 읽고 시작한다.** 배치 기록·진행 상황은 각각 `manifestation-rewrite.md`와
`deep-dive-progress.md`에 있지만, 무엇을 피해야 하는지·어떤 상한이 있는지는
전부 이 파일이 단일 출처다.

이 파일이 갱신 없이 방치되면 과거에도 문제가 생겼다 — "load-bearing" 금지가
심화 3차 대화에서만 정해지고 어떤 파일에도 기록되지 않아, 이후 배치4(8778)와
배치5(345)가 그 규칙을 모른 채 다시 위반했다. **대화로만 정한 제약은 존재하지
않는 것과 같다.** 새 규칙이 생기면 그 자리에서 이 파일에 적을 것.

---

## 1. manifestation A형 골격 (재사용 절대 금지)

### 1차 골격
- manifests by / manifests through
- the practical move is
- this number's folklore treats / folklore treats ... as
- since this number

### 하부 골격
- as what makes the / as what completes the / as what sustains the
- as what the moment ... calls for
- as the trigger for
- since that [명사] as
- taking one concrete step / one concrete step today
- letting one [형용사] [명사]
- "as what [동사]s the [명사]" 패턴 전체
- as the actual mechanism
- as what's actually needed
- necessary closures / letting one [형용사] [명사] conclude today / as part of that wave / since that follow through
- as what allows the
- as the source of
- as what makes room for
- since that recognition as
- as what actually produces
- to this number is
- not a single / to is already / today instead of

---

## 2. 연결구 회피 목록 (배치당 1회 이하)

완전 금지는 아니지만, 배치 규모가 커질수록(현재 100개) 반복 확률이 급증하므로
**배치당 1회 이하**로 관리한다. 새 배치를 쓰기 전 누적분에서 실사용 횟수를 다시
스캔할 것.

### 기존 12개 (배치4에서 확정, 누적 100개 기준 실측 횟수)
- rather than (7~) / right now (7) / a single (8) / not just (5) / instead of (6)
- is what (5) / is already (4) / more than (4) / pointing at (2)
- depends on whether (1) / isn't asking (3) / comes down to (1)

### 신규 18개 (배치5 조사에서 발견, 누적 80개 기준)
- you've been (7) / one specific (8) / the actual (6) / the same (6) / it today (6)
- you're actually (5) / version of (5) / piece of (5) / that actually (5)
- the specific (5) / say the (5) / doesn't need (4) / out loud (4) / to hold (4)
- wants that (4) / a specific (4) / back to (4)
- that's been (3) / what's already (3) / it isn't (3) — 경계선, 관찰 유지

배치5 실사용: rather than(6666) / right now(1221) / a single(118) / not just(9992) /
instead of(65) / is what(1515) / is already(3111) / the same(733) / piece of(322) /
out loud(3355) — 각 1회.

---

## 3. 비유·관용구 금지 (심화 3차, 각 페이지 1회 전용 — 타 페이지 재사용 금지)

심화 필드(structure/distinction/context/misconception/origin/ambiguity) 작성
중 만든 인상적인 비유·표현은 그 페이지의 시그니처로 취급하고 다른 페이지에서
재사용하지 않는다. 아래 6개는 전수 grep으로 원출처와 재사용 여부를 확인함
(배치6 조사 기준):

| 표현 | 원출처(페이지·필드) | 재사용 여부 |
|---|---|---|
| load-bearing | 0101 structure | ⚠️ **위반 — 8778 twinflame(배치4), 345 manifestation(배치5)에서 재사용됨. 수정 대상** |
| front-loads | 404 distinction | 위반 없음 (원출처 1건만) |
| one digit-swap away | 400 distinction | 위반 없음 |
| extra length invites a lazy reading | 4567 misconception | 위반 없음 |
| blocks sitting side by side | 1177 structure | 위반 없음 |
| borrows a stability it doesn't quite earn | 1010 misconception | 위반 없음 |

새로 심화 필드를 쓸 때 인상적인 비유가 나오면 이 표에 추가할 것.

---

## 4. 심화 필드별 오프너 패턴

심화 15개 페이지(1~3차)의 6필드 오프너를 배치6 조사에서 전수 대조한 결과,
**정확히 반복되는 오프너 표현은 없었다** — 사실상 규칙이 지켜지고는 있으나,
이를 규정한 명시적 목록은 어느 문서에도 존재하지 않았다(대화로만 있었을 가능성
있으나 복원 불가). 새 심화 배치부터는 각 페이지의 6필드 오프너(첫 5~8단어)를
아래 표 형식으로 이 파일에 누적 기록해 재구성 가능하게 한다.

| 필드 | 사용된 오프너(요약) |
|---|---|
| structure | "[N] most naturally reads as" / "Split one way" / "[N] + [N] is the natural split" / "Reading [N] as" / "Grouping the digits as" / "[N]'s four digits bracket" / "Two doubled blocks sitting side by side" / "[N] can be read as" / "[N] could be read as" / "There isn't really a competing way" / "[N] can be broken down" / "Whether the leading zero in" |
| distinction | "[N] doesn't share its territory with" / "[N] shares its starting three digits with" / "[N] and [N] share the same two ingredients" / "[N] confirms an instinct" / "[N] is one digit-swap away" / "[N] front-loads its digits" / "[N] is a genuine palindrome" / "[N] uses the exact same four digits" / "[N] on its own is a spike" / "[N] is explicitly a solo number" / "[N] and [N] end up describing" / "Try substituting one for the other" / "[N] marks a threshold" / "From [N]'s side of things" / "[N], [N], and [N] all lead with zero" |

(career/love/money 등 본편 필드는 이미 manifestation 프로젝트의 골격 목록으로
관리 중이므로 여기서는 심화 6필드만 추적한다.)

---

## 5. specific / specifically 관리 규칙

- **신규 작성 페이지: 배치당(또는 페이지당) 3회 이하.**
- 사이트 전체 실측(배치6 조사, 521개 전체 필드+FAQ 합산): **138개 페이지(26.5%)가
  5회 이상 사용.** 최다 15회(28번), 12회(8778) 등. 전체 합계 1,616회, 평균
  페이지당 3.11회.
- 기존 페이지(이미 배포된 A형 등)의 specific 과다는 **별도 작업으로 처리**한다
  — manifestation/심화 배치 진행 중에는 손대지 않는다.
- specific 계열(one specific / the specific / a specific)은 순수 어휘 반복이
  아니라 "여러 후보 중 하나를 특정해서 지목하라"는 **조언 내용 자체의 반복**인
  경우가 많다. 완전 제거가 원문 내용을 훼손한다면 배치당 3회까지는 허용하고,
  가능한 경우 강도·타이밍·순서·비교 등 다른 각도로 조언을 옮겨 회피를 우선
  시도한다.

---

## 6. 담화 규칙 (n-gram 검사로 안 잡히는 반복)

### 결말 방식 (배치당)
- 대비형("X, not Y") 결말: **배치당 5개 이하**, 누적 비율 **30% 이하 목표**
  (누적 100개 기준 현재 23.8%, 여유 있음)
- 결과형/근거형/행동형/조건형/질문형: 각각 **배치당 최대 5개**
- 행동형은 누적 2위(약 21%)이므로 4개 이하 권장

### 오프너 목표 분포 (배치당, 6개 초과 금지)
- 동사(명령) 4 / 숫자 시작 4(누적 편중 시 3으로 낮춤) / 명사구 3 / 조건절 3 /
  관계절 3 / 전치사구·부사구 3

### 근거의 출처 목표 (배치당)
- 숫자 자체의 성질: 5개 이하
- 독자의 상황: 6개 이상
- 비교 대상: 5개 이상 (누적 최소축, 계속 우선 확보 — 누적 100개 기준 아직 부족)
- 근거 없음: 2개 이하

### whatever 사용
- **배치당 2개 이하** (누적 100개 기준 21회, 21% — 여전히 관찰 필요)

### 조건·관계 도입부 분산 (한 형태 4개 초과 금지)
5개 형태: if/when/once/unless/as long as (각각 별개 형태로 카운트) /
분사구문(-ing) / 명사구+that절 / 도치·삽입구 / 조건 없이 단언.
whichever/whatever를 관계절 대체 형태로 쓰는 것도 별도 관찰.

---

## 7. 신규 규칙 (배치6 조사에서 확정)

### 규칙 A — manifestation 논지 변경 시 정합성 검사 (필수)
manifestation을 원문과 다른 논지로 재작성하면 같은 페이지의
meaning/spiritual/action/FAQ와 충돌할 수 있다. 실제로 3111·8111·2111에서
발생했다(action이 옛 논지를 유지한 채 방치됨).

**절차**: 논지를 바꾼 항목은 작성 직후 반드시 나머지 7개 필드(meaning/love/
career/money/spiritual/action/twinflame)와 FAQ 4문항을 전부 읽고 충돌 여부를
확인한다. 충돌 발견 시 그 자리에서 보고하고, manifestation을 되돌릴지 다른
필드를 맞출지 지시를 받는다 — 임의로 판단해 넘어가지 않는다.

### 규칙 B — 내부 용어 노출 금지
"this entry" / "the entry" / "its [필드명] field" 같은 데이터 구조 용어를
본문에 쓰지 않는다. 독자는 필드 구조를 모른다.

대체 표현: "이 페이지에서는" 류 대신 "여기서는"으로 줄이거나, 주어를 생략하고
서술한다. (예: "the reading this entry already leans on" → "the reading already
in use here" / "a position this entry explicitly argues against in its
misconception field" → 필드명 언급 자체를 삭제하고 논지만 서술)

이런 표현이 나온 원인: 여러 해석지를 비교하며 "정답 근거"를 지칭할 말이
필요했는데, 데이터 필드 이름을 그대로 끌어다 쓴 것으로 보인다. 심화 필드
작성 시 특히 주의.

### 규칙 C — specific/specifically 상한
위 5번 항목과 동일 (신규 작성 3회 이하, 기존 페이지는 별도 작업).
