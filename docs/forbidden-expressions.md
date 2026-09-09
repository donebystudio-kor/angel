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

## 금지 목록 재발 방지 — 실측 기록

배치 6에서 "this number's folklore treats X as"를 3건
(369·8888·533) 재사용하는 위반이 발생했다.
금지 목록 1번 항목이자 이 작업의 존재 이유인 골격 문구다.

원인: 서술이 자연스러워서 무심코 사용.
이는 원문 448개가 같은 골격으로 수렴한 것과 동일한 경로다.
금지 목록이 존재해도 이 인력은 계속 작동한다.

대응 절차 (필수):
1. 각 묶음 초안 완성 직후, 다른 검사보다 먼저
   A형 골격 5문구를 grep한다
   - manifests by / manifests through
   - the practical move is
   - this number's folklore treats / folklore treats ... as
   - since this number
2. 위반 시 해당 항목만 즉시 재작성
3. 최종 자가검증에서 한 번 더 확인

이 절차를 자가검증 항목이 아니라 **작성 절차**에 둔다.
검증에서 잡으면 이미 재작성 비용이 발생한 뒤다.

---

## 절차 개선 실측 기록

### A형 골격 grep 위치 이동 (배치 7에서 검증됨)
배치 6: 자가검증 단계에서 확인 → 3건 위반 발생
배치 7: 작성 절차 1순위로 실행 → 0건

검증에서 잡으면 재작성 비용이 이미 발생한 뒤다.
이 순서를 유지한다.

### 연결구 grep도 동일하게 이동 (배치 8부터)
배치 7에서 초안 단계 위반이 여전히 다수 발생했다.
rather than 5회 / is what 6회 / a single 2회.

**배치 8부터 연결구 grep도 A형 골격 grep과 함께
작성 절차 1순위에 둔다.** 묶음 초안 직후 두 가지를 연달아 실행한다.

### "is what" 반복 경향
배치 7에서 초안 6회로 최다 위반이었다.
무의식적으로 나오는 문형이다. 별도 감시 대상으로 둔다.

### 선정 단계 사전 필터 (배치 7에서 도입, 유지)
이미 재작성된 페이지와 2개 이상 비교 관계인 후보를
선정 단계에서 제외한다.
배치 6: 완료본 대조 7쌍 → 배치 7: 3쌍으로 감소.

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

### 신규 4개 (배치6 조사에서 발견, 누적 100개 기준)
- the one (8) / not the (8) / the next (7) / as a (7)

배치6 실사용: rather than(369) / right now(533) / a single(8888) / not just(24) /
instead of(1111) / is what(0) / is already(1199) / more than(9999) / the actual(4422) /
version of(0330) — 각 1회. 1차 초안에서 rather than 3회·right now 4회·is what 4회·
more than 4회 등 다수 위반 발견 → 재작성으로 각 1회로 조정.

새 항목 발견 없음(배치7 조사, 누적 120개 기준 재스캔) — 34개 목록으로 유지.

배치7 실사용: rather than(19) / a single(55555) / not just(567) / instead of(33) /
is what(5533) / is already(833) / more than(6226) / one specific(8558) /
the same(55555) / wants that(744) / the one(8558) / not the(744) — 각 1회.
1차 초안에서 rather than 5회·is what 6회 등 다수 위반 발견 → 재작성으로
각 1회로 조정. 특히 "is what"은 미묘한 문형이라 무의식적으로 반복하기
쉬움을 재확인 — 초안 완성 직후 grep 대상에 추가 고려.

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

---

## 8. 구조적 함정 (여러 트랙에서 반복 확인됨)

### 규칙 D — FAQ Q2 수렴 (세 번째 반복)

발생 이력:
- 영어 X111 트랙 1: 질문 32개를 다 다르게 만들고도 답변이 8/8 동일 골격
- 한국어 X111/111X: Q2 답변 16/16 동일 골격
- 한국어 double: "vs 단일 숫자" Q2 19개 동일 골격

원인: Q2는 항상 "다른 숫자와의 비교"라는 같은 기능을 한다. 논증 구조를
의도적으로 배정하지 않으면 반드시 수렴한다.

**필수 절차 (앞으로 모든 트랙)**
1. Q2 답변의 논증 구조를 페이지별로 미리 배정한다
2. 배정표를 작성 전에 확정한다
3. 작성 후 Q2만 따로 뽑아 골격 검사한다
4. 다른 FAQ 문항과 별개로 검사한다

### 규칙 E — 골격 대체의 함정

한국어 double 트랙에서 확인됐다. 금지 골격을 없애려고 만든 새 서술 방식이
그 자체로 골격이 됐다.
- AABB 역방향 10개 → "먼저 있고, 그 위에서"
- 0X0X 6개 → "0을 사이에 두고 두 번 오는"

배치 6의 "folklore treats" 재발과 동일 패턴이다.

**대응**: 같은 구조·형태를 공유하는 항목이 5개를 넘으면, 그 그룹만 따로
뽑아 오프너 검사를 한다. 형태 분류(AABB / ABAB / 0X0X 등)별로 검사하라.

#### 규칙 E 실증 — 한국어 mirror 트랙 2 (211건 충돌)

규칙 E를 문서화한 직후 작업에서 즉시 재발했다.

경위:
- 84개를 8가지 문장 구조로 나눔 (구조당 10~11개)
- 각 구조를 프로그램으로 슬롯 채움
- 결과: 211건 내부 충돌
- 원인: S3 11개 전부 "…도드라지게 만들어요",
  S6 10개 전부 "…그걸 N은 가리키고 있어요" 등
  구조마다 고정 문틀 하나에 단어만 갈아 끼움

**구조를 나누는 것과 문장을 다르게 쓰는 것은 다른 일이다.**
구조는 출발점이지 틀이 아니다.

**빗나간 예측**: 동사 풀 부족을 걱정했으나 실제 병목은 문장 골격이었다.
- S1(동사 10종 사용): 11개를 무난히 커버, 충돌 없음
- S3~S8(동사 다양성 있어 안전하다고 판단): 먼저 터짐

**"어휘가 다양하니 안전하다"는 판단을 하지 마라.**
어휘가 달라도 문장 틀이 같으면 같은 글이다.

**대응 절차**: 프로그램으로 슬롯을 채우지 마라. 구조를 배정한 뒤에도 각
항목의 문장은 개별적으로 쓴다. 같은 구조에 배정된 항목끼리도 문틀이
달라야 한다.

#### 규칙 E 실증 — 세 번째 재발, 한국어 mixed ABAB (spiritual 필드)

mirror 트랙 2(211건) → batch5a(M2 6개) → mixed ABAB(spiritual 4개),
**세 트랙 연속으로 발생했다.** 이번엔 문장 구조가 아니라 spiritual
필드의 조건문 틀 하나("~라고 여기고 있었다면, [반복어]하는 시기예요")를
7개 중 4개(4040·5050·7070·9090)에 무의식적으로 재사용했다.

**어느 필드든 4개 이상 항목을 한 번에 쓰면 틀이 생긴다.** meaning뿐
아니라 spiritual·action·FAQ 각 필드도 독립적으로 골격화될 수 있다.

**대응**: 자가검증에서 잡히긴 하지만 매번 재작성 비용이 든다. 작성
직후 meaning만 검사하지 말고, spiritual·action·FAQ 각 필드를 따로
뽑아 그 필드끼리도 틀 검사를 한다.

### 규칙 F — 탐지 정규식의 맹점

한국어 double 사전 진단이 "형태예요" 골격만 잡고 "숫자입니다"로 끝나는
ABAB 골격 6개를 놓쳤다.

**대응**: 골격 탐지 시 종결부를 특정하지 마라. 문장 중간 구조로 검색하거나,
종결부 여러 형태를 모두 포함해서 검색하라.

### 규칙 G — 구조 배정으로 막을 수 없는 충돌 (숫자 속성 공유)

한국어 mirror batch5a에서 발견됐다. 5005와 5225는 같은 문장 구조(M3)에
배정됐는데도 충돌했다. 원인은 둘 다 outer가 5라서 "변화와 자유"라는 같은
속성을 서술해야 했기 때문이다 — 구조를 흩어도 숫자가 같으면 소용없다는
사실을 보여준다.

**구조 배정은 문장 틀만 흩는다. 어휘는 못 흩는다.**
같은 숫자를 다루면 그 숫자의 표준 어휘가 반복된다.

**대응**: 배치 설계 시 구조뿐 아니라 **구성 숫자 분포**도 확인한다.
- 같은 숫자를 공유하는 항목이 3개 이상이면 별도 그룹으로 묶어 그 그룹만
  따로 어휘 검사한다
- 숫자별 표준 어휘(1=시작/독립, 5=변화/자유 등)는 불가피한 중복으로
  수용하되, 그 외 표현이 겹치면 재작성한다

### 규칙 H — 그룹별 범위 재판단 필수 (오프너만으론 부족할 수 있다)

mirror에서는 "오프너만 고치면 된다"가 통했다. 그런데 같은 원리를
mixed ABAB에 적용했다면 실패했을 것이다. ABAB의 골격은 첫 문장이
아니라 **문단 전체의 수사 구조**(정의 → "사건 아닌 흐름" 대조 →
조건문 → 결론)였고, spiritual 2문장·action 1문장·FAQ Q1까지 동일했다.
반면 같은 배치의 AAB는 spiritual/action/FAQ가 이미 항목마다 달라
첫 문장만 고치는 게 맞았다. **같은 배치 안에서도 그룹마다 범위가
다르다.**

**대응**: 새 그룹에 착수하기 전 반드시 전문(모든 필드)을 읽고 범위를
재판단한다. 판단 기준:
- 골격이 첫 문장에만 있는가
- 문단 전체가 같은 수사 구조를 공유하는가
- spiritual·action·FAQ까지 굳어 있는가

판단 근거를 작업 보고에 포함한다. 이전 그룹에서 "오프너만"이었다는
전례를 다음 그룹에 그대로 적용하지 마라.

### 규칙 I — FAQ Q1의 사이트 공통 관용구

"[N]을 자주 보는데 무슨 뜻인가요?"는 521개 페이지 전반에서 널리 쓰이는
공통 질문이다. 개별 페이지에서는 문제가 안 되지만, 같은 배치로 묶여
비교되는 그룹(mixed ABAB 등) 안에서 이 질문이 여러 항목에 그대로
반복되면 그 자체로 골격이 된다. 한국어 mixed ABAB에서 7개 중 2개
(6060·9090)가 이 문구를 그대로 써서 서로 충돌했다.

**대응**: 그룹 단위로 작업할 때는 FAQ Q1도 다양화 대상에 포함한다.
사이트 공통 관용구라는 이유로 grep 대상에서 제외하지 마라.
