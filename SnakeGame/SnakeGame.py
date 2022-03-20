import pygame
import random
from pygame.locals import *

pygame.init()
pygame.font.init()

screen = pygame.display.set_mode((1000, 1000))
pygame.display.set_caption("Bartosz Brodowski, grupa 6, projekt Snake")


def game_over_screen(score_end):
    while True:
        game_over_font = pygame.font.SysFont("Arial", 100)
        game_over = game_over_font.render("Game over", True, (255, 255, 255))
        end_result = game_over_font.render(
            "Your score is " + str(score_end), True, (255, 255, 255))
        reset_button = game_over_font.render(
            "Press \"R\" to restart", True, (255, 255, 255))
        end_button = game_over_font.render(
            "Press \"ESC\" to quit", True, (255, 255, 255))
        screen.fill((255, 0, 0))
        screen.blit(game_over, (290, 100))
        screen.blit(end_result, (230, 300))
        screen.blit(reset_button, (150, 500))
        screen.blit(end_button, (140, 700))
        # Powoduje update ekranu, dzięki czemu pojawia się ekran game over
        pygame.display.update()

        for button_press in pygame.event.get():
            if button_press.type == pygame.QUIT:
                pygame.quit()
                quit()
            if button_press.type == pygame.KEYDOWN:
                if button_press.key == K_r:
                    main()
                if button_press.key == K_ESCAPE:
                    pygame.quit()
                    quit()
                if button_press.type == pygame.QUIT:
                    pygame.quit()
                    quit()


def set_difficulty():
    difficulty_font = pygame.font.SysFont("Arial", 50)
    difficulty_choice = difficulty_font.render(
        "Choose difficulty:", True, (255, 255, 255))
    difficulty_one = difficulty_font.render(
        "1. Easy - click \"1\"", True, (255, 255, 255))
    difficulty_two = difficulty_font.render(
        "2. Medium - click \"2\"", True, (255, 255, 255))
    difficulty_three = difficulty_font.render(
        "3. Hard - click \"3\"", True, (255, 255, 255))
    instruction = difficulty_font.render(
        "Use arrows to move the snake", True, (255, 255, 255))
    screen.fill((44, 160, 19))
    screen.blit(difficulty_choice, (100, 100))
    screen.blit(difficulty_one, (100, 300))
    screen.blit(difficulty_two, (100, 400))
    screen.blit(difficulty_three, (100, 500))
    screen.blit(instruction, (200, 700))
    pygame.display.update()

    running = True
    while running:
        for button_press in pygame.event.get():
            if button_press.type == pygame.QUIT:
                pygame.quit()
                quit()
            if button_press.type == pygame.KEYDOWN:
                global difficulty
                if button_press.key == K_1:
                    difficulty = 10
                    running = False
                if button_press.key == K_2:
                    difficulty = 20
                    running = False
                if button_press.key == K_3:
                    difficulty = 30
                    running = False


def your_score(score_now):
    text_font = pygame.font.SysFont("Comic Sans MS", 30)
    text_surface = text_font.render(
        "Score: " + str(score_now), True, (0, 0, 0))
    screen.blit(text_surface, (800, 20))


def snake_generate(snake):      # Funkcja, która dodaje elementy węża na ekran.
    for i in snake:             # "snake" to lista, która zawiera części węża.
        pygame.draw.rect(screen, (242, 137, 31), [i[0], i[1], 40, 40])


def main():
    score = 0
    snake_x = 40
    snake_y = 40
    direction_x = 0
    direction_y = 0
    apple_x = random.randint(0, 24) * 40
    apple_y = random.randint(0, 24) * 40
    snake_body = [
        [snake_x, snake_y]
    ]

    set_difficulty()

    while True:
        for button_press in pygame.event.get():        # Sprawdzanie inputów z klawiatury
            if button_press.type == pygame.QUIT:
                pygame.quit()
                quit()
            if button_press.type == pygame.KEYDOWN:
                if button_press.key == K_ESCAPE:
                    pygame.quit()
                    quit()
                if button_press.key == pygame.K_LEFT:
                    if direction_x != 40:
                        direction_x = -40
                        direction_y = 0
                if button_press.key == pygame.K_RIGHT:
                    if direction_x != -40:
                        direction_x = 40
                        direction_y = 0
                if button_press.key == pygame.K_UP:
                    if direction_y != 40:
                        direction_y = -40
                        direction_x = 0
                if button_press.key == pygame.K_DOWN:
                    if direction_y != -40:
                        direction_y = 40
                        direction_x = 0

        if snake_x < 0 or snake_x >= 1000:          # Wykrywanie wyjechania poza ekran.
            game_over_screen(score)
        if snake_y < 0 or snake_y >= 1000:
            game_over_screen(score)

        # Wykrywanie zebrania przez węża jabłka.
        if snake_x == apple_x:
            if snake_y == apple_y:
                # Generowanie nowych koordynatów jabłka.
                apple_x = random.randint(0, 24) * 40
                apple_y = random.randint(0, 24) * 40
                score += 1

        snake_x += direction_x
        snake_y += direction_y
        screen.fill((44, 209, 19))
        # Generowanie nowego jabłka.
        pygame.draw.rect(screen, (200, 0, 0), [apple_x, apple_y, 40, 40])
        # Wyświetlanie wyniku w prawym górnym rogu ekranu gry.
        your_score(score)

        snake_head = [snake_x, snake_y]
        # Dodawanie nowych części węża; powoduje przesuwanie/wydłużanie węża.
        snake_body.append(snake_head)

        # Usuwanie ostatniego (pierwszego na liście) elementu węża po to
        if len(snake_body) > (score+1):
            # aby nie ciągnął się  w nieskończoność, ze względu na funckję
            del snake_body[0]
            # snake_body.append(snake_head), która dodaje element do ciała węża.

        # Wykrywanie czy wąż wchodzi w samego siebie.
        for i in snake_body[:-1]:
            if i == snake_head:                 # Jeśli element ciała węża i głowa będą miały takie same koordynaty
                game_over_screen(score)         # to zakończ grę.

        # Generuje węża z aktualnymi koordynatami na liście snake_body.
        snake_generate(snake_body)
        pygame.display.update()
        pygame.time.Clock().tick(difficulty)    # Prędkość poruszania węża.


main()
pygame.quit()
quit()
