# Generated by Django 4.0.6 on 2022-07-16 15:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('savings_investments', '0002_rename_savingsinvestments_savinginvestment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='savinginvestment',
            old_name='IsInvestment',
            new_name='is_investment',
        ),
    ]
