describe("예약하기", () => {
  it("시술 검색하고 장바구니에 담은 후 예약한다.", () => {
    cy.visit("/");
    cy.get('[data-cy="mypage-button"]').click();
    cy.contains("예약 내역이 없습니다")
      .should("exist")
      .then(() => {
        cy.contains("시술 보러가기").should("exist").click();
      });
    cy.get('[data-cy="cart-button"]').should("exist").click();
    cy.contains("시술목록이 비어있습니다")
      .should("exist")
      .then(() => {
        cy.contains("시술 보러가기").should("exist").click();
      });
    cy.get("input[placeholder='시술명을 입력하세요']").type("인모드");
    cy.wait(1000);
    cy.get('[data-cy="product-3"]').contains("장바구니에 담기").click();
    cy.get("input[placeholder='시술명을 입력하세요']").clear();
    cy.contains("보톡스").should("exist").click();
    cy.contains("사각턱 보톡스 [독일산]")
      .should("exist")
      .parent()
      .parent()
      .contains("장바구니에 담기")
      .click();
    cy.contains("스킨부스터").should("exist").click();
    cy.contains("눈가 전용 리쥬란 아이 1cc (5회)")
      .should("exist")
      .parent()
      .parent()
      .contains("장바구니에 담기")
      .click();
    cy.contains("다이어트").should("exist").click();
    cy.get('[data-cy="product-72"]').contains("장바구니에 담기").click();
    cy.visit("/cart");
    cy.get('[data-cy="cart-item-72"]').contains("+").click();
    cy.get('[data-cy="cart-item-72"]').contains("+").click();
    cy.get('[data-cy="cart-item-60"]').contains("+").click();
    cy.get('[data-cy="cart-item-60"]').contains("-").click();
    cy.get('[data-cy="cart-item-3"]').should("exist").contains("삭제").click();
    cy.get('[aria-label="Choose Saturday, June 6th, 2026"]').click();
    cy.contains("12:30").click();
    cy.get("button").contains("예약하기").click();
    cy.get('[data-cy="cancel-button"]').click();
    cy.get("button").contains("예약하기").click();
    cy.get('[data-cy="confirm-button"]').click();
    cy.contains("예약이 완료되었습니다")
      .should("exist")
      .then(() => {
        cy.get("a").contains("내 예약 확인하기").should("exist").click();
        cy.url().should("include", "/my-page");
      });
    cy.contains("예약 취소").click();
    cy.get("button").contains("확인").click();
    cy.visit("/");
  });
});
